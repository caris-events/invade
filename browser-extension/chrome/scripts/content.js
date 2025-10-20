(function () {
  const HIGHLIGHT_CLASS = 'invade-highlight';
  const ACTIVE_CLASS = 'invade-highlight--active';
  const TOOLTIP_ID = 'invade-tooltip';
  const SKIP_PARENT_TAGS = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'CODE', 'PRE', 'KBD', 'SAMP']);

  let settings = invadeMergeSettings();
  let vocabList = [];
  let vocabMap = new Map();
  let wordPattern = null;
  let observer = null;
  let mutationLock = false;
  let dataLoaded = false;
  let tooltipEl = null;

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
    const json = await response.json();
    vocabList = json;
    vocabMap = new Map();

    const wordSet = new Set();
    for (const vocab of json) {
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
    const recommended = vocab.recommended && vocab.recommended.length
      ? `<div class="invade-tooltip__line"><span class="invade-tooltip__label">建議</span><span class="invade-tooltip__value">${vocab.recommended.map(escapeHtml).join('、')}</span></div>`
      : '';
    const category = vocab.categoryLabel
      ? `<div class="invade-tooltip__line"><span class="invade-tooltip__label">分類</span><span class="invade-tooltip__value">${escapeHtml(vocab.categoryLabel)}</span></div>`
      : '';
    const explicit = vocab.explicitLabel && vocab.explicit !== ''
      ? `<div class="invade-tooltip__line"><span class="invade-tooltip__label">備註</span><span class="invade-tooltip__value">${escapeHtml(vocab.explicitLabel)}</span></div>`
      : '';
    const description = vocab.description
      ? `<p class="invade-tooltip__description">${escapeHtml(vocab.description)}</p>`
      : '';
    const example = vocab.examples && vocab.examples.length
      ? `<div class="invade-tooltip__example-label">範例</div><div class="invade-tooltip__example">${formatExampleText(vocab.examples[0].correct)}</div>`
      : '';
    const notice = vocab.notice
      ? `<div class="invade-tooltip__notice">${escapeHtml(vocab.notice)}</div>`
      : '';
    const deprecation = vocab.deprecation
      ? `<div class="invade-tooltip__notice">${escapeHtml(vocab.deprecation)}</div>`
      : '';

    return `
      <div class="invade-tooltip__title">${escapeHtml(vocab.word)}</div>
      ${description}
      ${recommended}
      ${category}
      ${explicit}
      ${example}
      ${notice}
      ${deprecation}
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
    document.documentElement.style.setProperty('--invade-highlight-color', settings.highlightColor);
    document.documentElement.style.setProperty('--invade-highlight-underline-style', settings.underlineStyle);
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

  bootstrap();
})();
