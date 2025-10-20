(function () {
  if (typeof browser !== 'undefined' && typeof globalThis.chrome === 'undefined') {
    globalThis.chrome = browser;
  }
  const HIGHLIGHT_CLASS = 'invade-highlight';
  const ACTIVE_CLASS = 'invade-highlight--active';
  const TOOLTIP_ID = 'invade-tooltip';
  const SKIP_PARENT_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'CODE', 'PRE', 'KBD', 'SAMP']);
  const TONE_DARK = 'dark';
  const TONE_LIGHT = 'light';

  let settings = invadeMergeSettings();
  let vocabMap = new Map();
  let wordPattern = null;
  let observer = null;
  let mutationLock = false;
  let dataLoaded = false;
  let tooltipEl = null;
  let highlightPalettes = {
    [TONE_DARK]: createPalette(INVADE_DEFAULT_SETTINGS.highlightColorDarkText, { opacity: 0.95 }),
    [TONE_LIGHT]: createPalette(INVADE_DEFAULT_SETTINGS.highlightColorLightText, { opacity: 0.85 })
  };

  async function bootstrap() {
    try {
      settings = invadeMergeSettings(await readSettings());
      applySettingsStyles();
      if (!settings.enabled) {
        installSettingsListener();
        return;
      }

      await ensureVocabData();
      highlightDocument(document.body);
      installObserver();
      installTooltip();
      installSettingsListener();
    } catch (error) {
      console.warn('[invade] 無法初始化支語提示器：', error);
    }
  }

  async function readSettings() {
    return new Promise(resolve => {
      chrome.storage.sync.get('settings', ({ settings: stored }) => {
        resolve(stored || {});
      });
    });
  }

  async function ensureVocabData() {
    if (dataLoaded) {
      return;
    }
    const response = await fetch(chrome.runtime.getURL('data/vocabs.json'));
    const vocabularies = await response.json();
    vocabMap = new Map();

    const wordSet = new Set();
    for (const vocab of vocabularies) {
      if (!vocab.word) {
        continue;
      }
      vocabMap.set(vocab.word, vocab);
      wordSet.add(vocab.word);
      if (/^[A-Za-z0-9\s]+$/.test(vocab.word)) {
        const lower = vocab.word.toLowerCase();
        const upper = vocab.word.toUpperCase();
        vocabMap.set(lower, vocab);
        vocabMap.set(upper, vocab);
        wordSet.add(lower);
        wordSet.add(upper);
      }
    }
    const words = Array.from(wordSet).filter(Boolean);
    words.sort((a, b) => b.length - a.length);
    const escaped = words.map(escapeRegExp).filter(Boolean);
    if (!escaped.length) {
      throw new Error('無法產生詞彙清單');
    }
    wordPattern = new RegExp('(' + escaped.join('|') + ')', 'g');
    dataLoaded = true;
  }

  function highlightDocument(root) {
    if (!wordPattern || !root) {
      return;
    }
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        const parent = node.parentElement;
        if (!parent) {
          return NodeFilter.FILTER_REJECT;
        }
        if (parent.classList && parent.classList.contains(HIGHLIGHT_CLASS)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (SKIP_PARENT_TAGS.has(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (settings.ignoreInputs && (parent.isContentEditable || parent.closest('input, textarea, [contenteditable=""], [contenteditable="true"]'))) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }
    if (!nodes.length) {
      return;
    }
    mutationLock = true;
    for (const node of nodes) {
      highlightTextNode(node);
    }
    mutationLock = false;
  }

  function highlightTextNode(textNode) {
    const text = textNode.nodeValue;
    if (!text || !text.trim()) {
      return;
    }
    wordPattern.lastIndex = 0;
    const matches = [];
    let match;
    while ((match = wordPattern.exec(text)) !== null) {
      const word = match[0];
      const vocab = vocabMap.get(word);
      if (!vocab) {
        continue;
      }
      matches.push({
        index: match.index,
        length: word.length,
        word,
        vocab
      });
    }
    if (!matches.length) {
      return;
    }

    const fragment = document.createDocumentFragment();
    const tone = classifyTextTone(textNode.parentElement);
    let cursor = 0;
    for (const result of matches) {
      if (result.index > cursor) {
        fragment.append(textNode.ownerDocument.createTextNode(text.slice(cursor, result.index)));
      }
      const span = textNode.ownerDocument.createElement('span');
      span.className = HIGHLIGHT_CLASS;
      span.dataset.invadeWord = result.vocab.word;
      span.dataset.invadeOriginal = result.word;
      span.tabIndex = 0;
      span.textContent = text.slice(result.index, result.index + result.length);
      applyHighlightPalette(span, tone);
      fragment.append(span);
      cursor = result.index + result.length;
    }
    if (cursor < text.length) {
      fragment.append(textNode.ownerDocument.createTextNode(text.slice(cursor)));
    }
    textNode.parentNode.replaceChild(fragment, textNode);
  }

  function installObserver() {
    if (observer || !settings.enabled) {
      return;
    }
    observer = new MutationObserver(mutations => {
      if (mutationLock || !settings.enabled) {
        return;
      }
      const targets = [];
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
              targets.push(node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              if (node.classList && node.classList.contains(HIGHLIGHT_CLASS)) {
                return;
              }
              highlightDocument(node);
            }
          });
        } else if (mutation.type === 'characterData' && mutation.target.nodeType === Node.TEXT_NODE) {
          targets.push(mutation.target);
        }
      }
      if (!targets.length) {
        return;
      }
      mutationLock = true;
      for (const textNode of targets) {
        if (!textNode.parentElement || (textNode.parentElement.classList && textNode.parentElement.classList.contains(HIGHLIGHT_CLASS))) {
          continue;
        }
        highlightTextNode(textNode);
      }
      mutationLock = false;
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true
    });
  }

  function disconnectObserver() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }

  function installTooltip() {
    if (!settings.showTooltip) {
      return;
    }
    tooltipEl = document.getElementById(TOOLTIP_ID);
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = TOOLTIP_ID;
      tooltipEl.setAttribute('role', 'tooltip');
      tooltipEl.setAttribute('aria-live', 'polite');
      document.documentElement.appendChild(tooltipEl);
    }
    document.addEventListener('pointerenter', handlePointerEnter, true);
    document.addEventListener('pointerleave', handlePointerLeave, true);
    document.addEventListener('focusin', handleFocusIn, true);
    document.addEventListener('focusout', handleFocusOut, true);
    document.addEventListener('scroll', hideTooltip, true);
  }

  function removeTooltip() {
    if (!tooltipEl) {
      return;
    }
    hideTooltip();
    document.removeEventListener('pointerenter', handlePointerEnter, true);
    document.removeEventListener('pointerleave', handlePointerLeave, true);
    document.removeEventListener('focusin', handleFocusIn, true);
    document.removeEventListener('focusout', handleFocusOut, true);
    document.removeEventListener('scroll', hideTooltip, true);
    tooltipEl.remove();
    tooltipEl = null;
  }

  function handlePointerEnter(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const span = target.closest('.' + HIGHLIGHT_CLASS);
    if (!span) {
      return;
    }
    span.classList.add(ACTIVE_CLASS);
    showTooltip(span);
  }

  function handlePointerLeave(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const span = target.closest('.' + HIGHLIGHT_CLASS);
    if (!span) {
      return;
    }
    span.classList.remove(ACTIVE_CLASS);
    hideTooltip();
  }

  function handleFocusIn(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    if (target.classList.contains(HIGHLIGHT_CLASS)) {
      target.classList.add(ACTIVE_CLASS);
      showTooltip(target);
    }
  }

  function handleFocusOut(event) {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    if (target.classList.contains(HIGHLIGHT_CLASS)) {
      target.classList.remove(ACTIVE_CLASS);
      hideTooltip();
    }
  }

  function showTooltip(anchor) {
    if (!tooltipEl || !settings.showTooltip) {
      return;
    }
    const word = anchor.dataset.invadeWord;
    if (!word) {
      return;
    }
    const vocab = vocabMap.get(word) || vocabMap.get(anchor.dataset.invadeOriginal);
    if (!vocab) {
      return;
    }
    tooltipEl.innerHTML = renderTooltipContent(vocab);
    tooltipEl.style.display = 'block';
    requestAnimationFrame(() => positionTooltip(anchor, tooltipEl));
  }

  function hideTooltip() {
    if (tooltipEl) {
      tooltipEl.style.display = 'none';
      tooltipEl.textContent = '';
    }
  }

  function renderTooltipContent(vocab) {
    const dek = vocab.description
      ? `<p class="invade-tooltip__dek">${escapeHtml(vocab.description)}</p>`
      : '';

    const metaRows = [];
    if (vocab.categoryLabel) {
      metaRows.push(
        `<div class="invade-tooltip__meta-row"><span class="invade-tooltip__meta-label">分類</span><span class="invade-tooltip__meta-value">${escapeHtml(vocab.categoryLabel)}</span></div>`
      );
    }
    if (vocab.recommended && vocab.recommended.length) {
      metaRows.push(
        `<div class="invade-tooltip__meta-row"><span class="invade-tooltip__meta-label">建議</span><span class="invade-tooltip__meta-value">${vocab.recommended.map(escapeHtml).join('、')}</span></div>`
      );
    }
    if (vocab.explicitLabel && vocab.explicit !== '') {
      metaRows.push(
        `<div class="invade-tooltip__meta-row"><span class="invade-tooltip__meta-label">備註</span><span class="invade-tooltip__meta-value">${escapeHtml(vocab.explicitLabel)}</span></div>`
      );
    }
    const meta = metaRows.length ? `<section class="invade-tooltip__meta">${metaRows.join('')}</section>` : '';

    const example = vocab.examples && vocab.examples.length
      ? `<div class="invade-tooltip__kicker">用字示例</div><div class="invade-tooltip__example"><p>${formatExampleText(
        vocab.examples[0].correct
      )}</p></div>`
      : '';

    const footnotes = [vocab.notice, vocab.deprecation]
      .filter(Boolean)
      .map(note => `<p class="invade-tooltip__footnote">${escapeHtml(note)}</p>`)
      .join('');

    return `
      <div class="invade-tooltip__masthead">支語觀察報</div>
      <h2 class="invade-tooltip__headline">${escapeHtml(vocab.word)}</h2>
      ${dek}
      ${meta}
      ${example}
      ${footnotes}
    `;
  }

  function positionTooltip(anchor, tooltip) {
    if (!anchor.isConnected) {
      hideTooltip();
      return;
    }
    const rect = anchor.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    let top = rect.top - tooltipRect.height - 10;
    let caret = 'bottom';
    if (top < 8) {
      top = rect.bottom + 10;
      caret = 'top';
    }
    let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
    const maxLeft = window.innerWidth - tooltipRect.width - 8;
    if (left < 8) {
      left = 8;
    } else if (left > maxLeft) {
      left = maxLeft;
    }
    tooltip.style.top = Math.round(top) + 'px';
    tooltip.style.left = Math.round(left) + 'px';
    tooltip.dataset.position = caret;
  }

  function installSettingsListener() {
    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName !== 'sync' || !changes.settings) {
        return;
      }
      const newSettings = invadeMergeSettings(changes.settings.newValue);
      const wasEnabled = settings.enabled;
      settings = newSettings;
      applySettingsStyles();

      if (!wasEnabled && settings.enabled) {
        bootstrapAfterEnable();
        return;
      }
      if (wasEnabled && !settings.enabled) {
        removeHighlights();
        disconnectObserver();
        removeTooltip();
        return;
      }

      if (settings.enabled) {
        if (tooltipEl && !settings.showTooltip) {
          removeTooltip();
        } else if (!tooltipEl && settings.showTooltip) {
          installTooltip();
        }
        refreshHighlights();
      }
    });
  }

  async function bootstrapAfterEnable() {
    try {
      await ensureVocabData();
      highlightDocument(document.body);
      installObserver();
      installTooltip();
    } catch (error) {
      console.warn('[invade] 無法重新啟用支語提示器：', error);
    }
  }

  function refreshHighlights() {
    if (!settings.enabled) {
      return;
    }
    removeHighlights();
    highlightDocument(document.body);
  }

  function removeHighlights() {
    const spans = document.querySelectorAll('.' + HIGHLIGHT_CLASS);
    if (!spans.length) {
      return;
    }
    mutationLock = true;
    for (const span of spans) {
      const parent = span.parentNode;
      if (!parent) {
        continue;
      }
      parent.replaceChild(document.createTextNode(span.textContent || ''), span);
      parent.normalize();
    }
    mutationLock = false;
    hideTooltip();
  }

  function applySettingsStyles() {
    const darkTextColor =
      settings.highlightColorDarkText || settings.highlightColor || INVADE_DEFAULT_SETTINGS.highlightColorDarkText;
    const lightTextColor =
      settings.highlightColorLightText || settings.highlightColor || INVADE_DEFAULT_SETTINGS.highlightColorLightText;

    const darkPalette = createPalette(darkTextColor, { opacity: 0.95 });
    const lightPalette = createPalette(lightTextColor, { opacity: 0.85 });
    highlightPalettes = {
      [TONE_DARK]: darkPalette,
      [TONE_LIGHT]: lightPalette
    };

    document.documentElement.style.setProperty('--invade-highlight-color', darkPalette.fill);
    document.documentElement.style.setProperty('--invade-highlight-outline-color', darkPalette.outline);
    document.documentElement.style.setProperty('--invade-highlight-focus-ring', darkPalette.focusRing);
    document.documentElement.style.setProperty('--invade-highlight-underline-color', darkPalette.underline);

    const fillOpacity = settings.enableHighlightFill ? '1' : '0';
    document.documentElement.style.setProperty('--invade-highlight-fill-opacity', fillOpacity);

    const underlineWidth = getUnderlineWidth(settings.underlineWeight);

    if (settings.enableUnderline) {
      document.documentElement.style.setProperty('--invade-highlight-underline-width', underlineWidth);
      document.documentElement.style.setProperty('--invade-highlight-underline-style', settings.underlineStyle);
    } else {
      document.documentElement.style.setProperty('--invade-highlight-underline-width', '0px');
      document.documentElement.style.setProperty('--invade-highlight-underline-style', 'solid');
    }
  }

  function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function escapeHtml(text) {
    return (text || '').replace(/[&<>"']/g, char => {
      switch (char) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case '\'':
          return '&#39;';
        default:
          return char;
      }
    });
  }

  function formatExampleText(text) {
    if (!text) {
      return '';
    }
    const parts = text.split(/(\{\{.*?\}\})/g);
    return parts.map(part => {
      if (part.startsWith('{{') && part.endsWith('}}')) {
        return `<mark>${escapeHtml(part.slice(2, -2))}</mark>`;
      }
      return escapeHtml(part);
    }).join('');
  }

  function applyHighlightPalette(span, tone) {
    const palette = highlightPalettes[tone] || highlightPalettes[TONE_DARK];
    span.dataset.invadeTone = tone;
    if (!palette) {
      return;
    }
    span.style.setProperty('--invade-highlight-color', palette.fill);
    span.style.setProperty('--invade-highlight-outline-color', palette.outline);
    span.style.setProperty('--invade-highlight-focus-ring', palette.focusRing);
    span.style.setProperty('--invade-highlight-underline-color', palette.underline);
    span.style.setProperty('--invade-highlight-fill-opacity-local', palette.opacity);
  }

  function classifyTextTone(element) {
    const rgba = getEffectiveTextColor(element);
    if (!rgba) {
      return TONE_DARK;
    }
    if (rgba.a < 0.35) {
      return TONE_DARK;
    }
    const luminance = relativeLuminance(rgba);
    return luminance >= 0.6 ? TONE_LIGHT : TONE_DARK;
  }

  function getEffectiveTextColor(element) {
    let current = element;
    while (current) {
      try {
        const style = window.getComputedStyle(current);
        if (style) {
          const parsed = parseColorToRgba(style.color);
          if (parsed) {
            return parsed;
          }
        }
      } catch (error) {
        console.warn('[invade] 讀取文字色彩失敗：', error);
        break;
      }
      current = current.parentElement;
    }
    return { r: 20, g: 20, b: 20, a: 1 };
  }

  function parseColorToRgba(value) {
    if (!value || typeof value !== 'string') {
      return null;
    }
    const trimmed = value.trim();
    const rgbMatch = trimmed.match(/^rgba?\(([^)]+)\)$/i);
    if (rgbMatch) {
      const parts = rgbMatch[1].split(',').map(part => part.trim());
      if (parts.length >= 3) {
        const r = clampColorComponent(parseFloat(parts[0]));
        const g = clampColorComponent(parseFloat(parts[1]));
        const b = clampColorComponent(parseFloat(parts[2]));
        const a = parts[3] !== undefined ? clampAlpha(parseFloat(parts[3])) : 1;
        return { r, g, b, a };
      }
    }
    const hexMatch = trimmed.match(/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/);
    if (hexMatch) {
      const hex = hexMatch[1];
      if (hex.length === 3 || hex.length === 4) {
        const r = parseInt(hex[0] + hex[0], 16);
        const g = parseInt(hex[1] + hex[1], 16);
        const b = parseInt(hex[2] + hex[2], 16);
        const a = hex.length === 4 ? parseInt(hex[3] + hex[3], 16) / 255 : 1;
        return { r, g, b, a };
      }
      if (hex.length === 6 || hex.length === 8) {
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);
        const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
        return { r, g, b, a };
      }
    }
    return null;
  }

  function clampColorComponent(value) {
    if (Number.isNaN(value)) {
      return 0;
    }
    return Math.max(0, Math.min(255, Math.round(value)));
  }

  function clampAlpha(value) {
    if (Number.isNaN(value)) {
      return 1;
    }
    return Math.max(0, Math.min(1, value));
  }

  function relativeLuminance({ r, g, b }) {
    const normalize = channel => {
      const value = channel / 255;
      return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * normalize(r) + 0.7152 * normalize(g) + 0.0722 * normalize(b);
  }

  function createPalette(color, options = {}) {
    const base = color || INVADE_DEFAULT_SETTINGS.highlightColorDarkText;
    const opacity = typeof options.opacity === 'number' ? Math.max(0, Math.min(1, options.opacity)) : 1;
    return {
      fill: base,
      outline: deriveTone(base, 0.75, 0.32, 'rgba(73, 58, 41, 0.25)'),
      focusRing: deriveTone(base, 0.6, 0.3, 'rgba(73, 58, 41, 0.3)'),
      underline: deriveTone(base, 0.7, 0.55, 'rgba(73, 58, 41, 0.55)'),
      opacity: String(opacity)
    };
  }

  function getUnderlineWidth(weight) {
    switch (weight) {
      case 'thin':
        return '0.75px';
      case 'bold':
        return '2px';
      case 'medium':
      default:
        return '1.2px';
    }
  }

  function deriveTone(color, factor, alpha, fallback) {
    if (!color || typeof color !== 'string') {
      return fallback;
    }
    const match = color.trim().match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);
    if (!match) {
      return fallback;
    }
    let value = match[1];
    if (value.length === 3) {
      value = value.split('').map(ch => ch + ch).join('');
    }
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    const tone = channel => Math.max(0, Math.min(255, Math.round(channel * factor)));
    return `rgba(${tone(r)}, ${tone(g)}, ${tone(b)}, ${alpha})`;
  }

  bootstrap();
})();
