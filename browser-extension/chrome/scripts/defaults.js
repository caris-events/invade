const INVADE_DEFAULT_SETTINGS = Object.freeze({
  enabled: true,
  showTooltip: true,
  highlightColor: '#e2d4a2',
  highlightColorDarkText: '#e2d4a2',
  highlightColorLightText: '#625233',
  underlineStyle: 'dotted',
  underlineWeight: 'medium',
  enableHighlightFill: true,
  enableUnderline: true,
  ignoreInputs: true,
  debugSkip: false,
  debugSegments: false,
  debugTooltip: false,
  debugWeights: false
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
