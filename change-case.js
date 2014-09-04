var camel = require('camel-case');

/**
 * Map of module names to tuples of short alias name and require definition.
 * Long alias names will be generated automatically based on the module name.
 *
 * @type {Object}
 */
var ALIASES = {
  'dot-case':         ['dot', require('dot-case')],
  'swap-case':        ['swap', require('swap-case')],
  'path-case':        ['path', require('path-case')],
  'upper-case':       ['upper', require('upper-case')],
  'lower-case':       ['lower', require('lower-case')],
  'camel-case':       ['camel', require('camel-case')],
  'snake-case':       ['snake', require('snake-case')],
  'title-case':       ['title', require('title-case')],
  'param-case':       ['param', require('param-case')],
  'pascal-case':      ['pascal', require('pascal-case')],
  'constant-case':    ['constant', require('constant-case')],
  'sentence-case':    ['sentence', require('sentence-case')],
  'is-upper-case':    ['isUpper', require('is-upper-case')],
  'is-lower-case':    ['isLower', require('is-lower-case')],
  'upper-case-first': ['ucFirst', require('upper-case-first')],
};

/**
 * Automatically alias all modules and short names.
 */
Object.keys(ALIASES).forEach(function (name) {
  module.exports[camel(name)] = module.exports[ALIASES[name][0]] = ALIASES[name][1];
});
