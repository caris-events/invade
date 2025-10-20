const INVADE_DEFAULT_SETTINGS = Object.freeze({
  enabled: true,
  showTooltip: true,
  highlightColor: '#f4e6c1',
  underlineStyle: 'dotted',
  enableHighlightFill: true,
  enableUnderline: true,
  ignoreInputs: true
});

function invadeMergeSettings(overrides = {}) {
  return {
    ...INVADE_DEFAULT_SETTINGS,
    ...(overrides || {})
  };
}

if (typeof self !== 'undefined') {
  self.INVADE_DEFAULT_SETTINGS = INVADE_DEFAULT_SETTINGS;
  self.invadeMergeSettings = invadeMergeSettings;
}
