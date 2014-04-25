var camel = require('camel-case');

/**
 * Map of module names to short alias name. Long alias names will be generated
 * automatically based on the module name.
 *
 * @type {Object}
 */
var ALIASES = {
  'dot-case':         'dot',
  'swap-case':        'swap',
  'path-case':        'path',
  'upper-case':       'upper',
  'lower-case':       'lower',
  'camel-case':       'camel',
  'snake-case':       'snake',
  'title-case':       'title',
  'param-case':       'param',
  'pascal-case':      'pascal',
  'constant-case':    'constant',
  'sentence-case':    'sentence',
  'is-upper-case':    'isUpper',
  'is-lower-case':    'isLower',
  'upper-case-first': 'ucFirst'
};

/**
 * Automatically alias all modules and short names.
 */
Object.keys(ALIASES).forEach(function (name) {
  exports[camel(name)] = exports[ALIASES[name]] = require(name);
});
