if (typeof browser !== 'undefined' && typeof window.chrome === 'undefined') {
  window.chrome = browser;
}

let currentSettings = invadeMergeSettings();
let statusTimeout = null;
let saveTimeoutId = null;
let pendingStatusElement = null;
const SAVE_DEBOUNCE_MS = 400;

document.addEventListener('DOMContentLoaded', init);

async function init() {
  const stored = await loadStoredSettings();
  const migrated = migrateLegacySettings(stored);
  currentSettings = invadeMergeSettings(migrated);
  const elements = {
    enabled: document.getElementById('enabled'),
    showTooltip: document.getElementById('showTooltip'),
    enableHighlightFill: document.getElementById('enableHighlightFill'),
    enableUnderline: document.getElementById('enableUnderline'),
    highlightColorDarkText: document.getElementById('highlightColorDarkText'),
    highlightColorLightText: document.getElementById('highlightColorLightText'),
    underlineStyle: document.getElementById('underlineStyle'),
    underlineWeight: document.getElementById('underlineWeight'),
    ignoreInputs: document.getElementById('ignoreInputs'),
    status: document.getElementById('status'),
    reset: document.getElementById('reset-button')
  };

  applyToForm(elements, currentSettings);
  attachListeners(elements);
}

function attachListeners(elements) {
  const handler = event => {
    const target = event.target;
    const key = target.id;
    if (!(key in currentSettings)) {
      return;
    }
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (currentSettings[key] === value) {
      return;
    }
    currentSettings = {
      ...currentSettings,
      [key]: value
    };
    queueSave(elements.status);
    if (key === 'enableHighlightFill' || key === 'enableUnderline') {
      updateControlStates(elements, currentSettings);
    }
  };

  elements.enabled.addEventListener('change', handler);
  elements.showTooltip.addEventListener('change', handler);
  elements.enableHighlightFill.addEventListener('change', handler);
  elements.enableUnderline.addEventListener('change', handler);
  elements.ignoreInputs.addEventListener('change', handler);
  elements.underlineStyle.addEventListener('change', handler);
  elements.underlineWeight.addEventListener('change', handler);
  elements.highlightColorDarkText.addEventListener('input', handler);
  elements.highlightColorDarkText.addEventListener('change', handler);
  elements.highlightColorLightText.addEventListener('input', handler);
  elements.highlightColorLightText.addEventListener('change', handler);

  elements.reset.addEventListener('click', async () => {
    currentSettings = invadeMergeSettings();
    applyToForm(elements, currentSettings);
    await flushSave(elements.status);
    showStatus(elements.status, '預設設定已套用');
  });
}

function applyToForm(elements, settings) {
  elements.enabled.checked = settings.enabled;
  elements.showTooltip.checked = settings.showTooltip;
  elements.enableHighlightFill.checked = settings.enableHighlightFill;
  elements.enableUnderline.checked = settings.enableUnderline;
  elements.highlightColorDarkText.value = settings.highlightColorDarkText || settings.highlightColor;
  elements.highlightColorLightText.value = settings.highlightColorLightText || settings.highlightColor;
  elements.underlineStyle.value = settings.underlineStyle;
  elements.underlineWeight.value = settings.underlineWeight || 'medium';
  elements.ignoreInputs.checked = settings.ignoreInputs;
  updateControlStates(elements, settings);
}

async function loadStoredSettings() {
  return new Promise(resolve => {
    chrome.storage.sync.get('settings', ({ settings }) => {
      resolve(settings || {});
    });
  });
}

function showStatus(element, message) {
  if (!element) {
    return;
  }
  element.textContent = message;
  if (statusTimeout) {
    clearTimeout(statusTimeout);
  }
  statusTimeout = setTimeout(() => {
    element.textContent = '';
  }, 1800);
}

function updateControlStates(elements, settings) {
  const disableFillControls = !settings.enableHighlightFill;
  elements.highlightColorDarkText.disabled = disableFillControls;
  elements.highlightColorLightText.disabled = disableFillControls;
  const disableUnderlineControls = !settings.enableUnderline;
  elements.underlineStyle.disabled = disableUnderlineControls;
  elements.underlineWeight.disabled = disableUnderlineControls;
}

function queueSave(statusElement) {
  pendingStatusElement = statusElement;
  if (saveTimeoutId) {
    clearTimeout(saveTimeoutId);
  }
  saveTimeoutId = setTimeout(() => {
    saveTimeoutId = null;
    persistSettings(pendingStatusElement);
  }, SAVE_DEBOUNCE_MS);
}

async function flushSave(statusElement) {
  if (saveTimeoutId) {
    clearTimeout(saveTimeoutId);
    saveTimeoutId = null;
  }
  await persistSettings(statusElement);
}

async function persistSettings(statusElement) {
  await new Promise(resolve => {
    chrome.storage.sync.set({ settings: currentSettings }, resolve);
  });
  showStatus(statusElement, '已儲存');
}

function migrateLegacySettings(stored) {
  if (!stored) {
    return {};
  }
  const migrated = { ...stored };
  if (!migrated.highlightColorDarkText && migrated.highlightColor) {
    migrated.highlightColorDarkText = migrated.highlightColor;
  }
  if (!migrated.highlightColorLightText && migrated.highlightColor) {
    migrated.highlightColorLightText = darkenHex(migrated.highlightColor, 0.55);
  }
  if (!migrated.underlineWeight) {
    migrated.underlineWeight = 'medium';
  }
  return migrated;
}

function darkenHex(hex, factor) {
  const match = typeof hex === 'string' ? hex.trim().match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/) : null;
  if (!match) {
    return '#625233';
  }
  let value = match[1];
  if (value.length === 3) {
    value = value.split('').map(ch => ch + ch).join('');
  }
  const clamp = component => Math.max(0, Math.min(255, Math.round(component * factor)));
  const r = clamp(parseInt(value.slice(0, 2), 16));
  const g = clamp(parseInt(value.slice(2, 4), 16));
  const b = clamp(parseInt(value.slice(4, 6), 16));
  return (
    '#' +
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0')
  );
}
