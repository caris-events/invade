const INVADE_DEFAULT_SETTINGS = Object.freeze({
  enabled: true,
  showTooltip: true,
  highlightColor: '#fff176',
  underlineStyle: 'dotted',
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
