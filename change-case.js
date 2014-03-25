var dot      = require('dot-case');
var swap     = require('swap-case');
var path     = require('path-case');
var upper    = require('upper-case');
var lower    = require('lower-case');
var camel    = require('camel-case');
var snake    = require('snake-case');
var title    = require('title-case');
var param    = require('param-case');
var pascal   = require('pascal-case');
var constant = require('constant-case');
var sentence = require('sentence-case');

/**
 * Check if a string is upper case.
 *
 * @param  {String}  str
 * @return {Boolean}
 */
exports.isUpperCase = function (str) {
  return str === upper(str);
};

/**
 * Check if a string is lower case.
 *
 * @param  {String}  str
 * @return {Boolean}
 */
exports.isLowerCase = function (str) {
  return str === lower(str);
};

/**
 * Upper case a string.
 *
 * @type {Function}
 */
exports.upperCase = exports.upper = upper;

/**
 * Lower case a string.
 *
 * @type {Function}
 */
exports.lowerCase = exports.lower = lower;

/**
 * Title case a string.
 *
 * @type {Function}
 */
exports.titleCase = exports.title = title;

/**
 * Sentence case a string.
 *
 * @type {Function}
 */
exports.sentenceCase = exports.sentence = sentence;

/**
 * Camel case a string.
 *
 * @type {Function}
 */
exports.camelCase = exports.camel = camel;

/**
 * Pascal case a string.
 *
 * @type {Function}
 */
exports.pascalCase = exports.pascal = pascal;

/**
 * Snake case a string.
 *
 * @type {Function}
 */
exports.snakeCase = exports.snake = snake;

/**
 * Param case a string.
 *
 * @type {Function}
 */
exports.paramCase = exports.param = param;

/**
 * Dot case a string.
 *
 * @type {Function}
 */
exports.dotCase = exports.dot = dot;

/**
 * Path case a string.
 *
 * @type {Function}
 */
exports.pathCase = exports.path = path;

/**
 * Constant case a string.
 *
 * @type {Function}
 */
exports.constantCase = exports.constant = constant;

/**
 * Swap case a string.
 *
 * @type {Function}
 */
exports.swapCase = exports.swap = swap;
