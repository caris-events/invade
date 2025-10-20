let currentSettings = invadeMergeSettings();
let statusTimeout = null;

document.addEventListener('DOMContentLoaded', init);

async function init() {
  currentSettings = invadeMergeSettings(await loadStoredSettings());
  const elements = {
    enabled: document.getElementById('enabled'),
    showTooltip: document.getElementById('showTooltip'),
    enableHighlightFill: document.getElementById('enableHighlightFill'),
    enableUnderline: document.getElementById('enableUnderline'),
    highlightColor: document.getElementById('highlightColor'),
    underlineStyle: document.getElementById('underlineStyle'),
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
    currentSettings = {
      ...currentSettings,
      [key]: value
    };
    saveCurrentSettings(elements.status);
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
  elements.highlightColor.addEventListener('input', handler);
  elements.highlightColor.addEventListener('change', handler);

  elements.reset.addEventListener('click', async () => {
    currentSettings = invadeMergeSettings();
    applyToForm(elements, currentSettings);
    await new Promise(resolve => {
      chrome.storage.sync.set({ settings: currentSettings }, resolve);
    });
    showStatus(elements.status, '預設設定已套用');
  });
}

function applyToForm(elements, settings) {
  elements.enabled.checked = settings.enabled;
  elements.showTooltip.checked = settings.showTooltip;
  elements.enableHighlightFill.checked = settings.enableHighlightFill;
  elements.enableUnderline.checked = settings.enableUnderline;
  elements.highlightColor.value = settings.highlightColor;
  elements.underlineStyle.value = settings.underlineStyle;
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

async function saveCurrentSettings(statusElement) {
  await new Promise(resolve => {
    chrome.storage.sync.set({ settings: currentSettings }, resolve);
  });
  showStatus(statusElement, '已儲存');
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
  elements.highlightColor.disabled = !settings.enableHighlightFill;
  elements.underlineStyle.disabled = !settings.enableUnderline;
}
