/**
 * Wraps a function with a security check that ensures the argument being
 * passed in is a string.
 *
 * @param  {Function} fn
 * @return {Function}
 */
var acceptString = function (fn) {
  return function (string) {
    if (typeof string !== 'string') {
      throw new TypeError('Changing case will only works on strings');
    }

    return fn.apply(null, arguments);
  };
};

/**
 * Sanitizes a passed in string with certain options. It accepts a replacement
 * function that should accept a string word parameter. It also accepts an
 * optional separator override to replace the separator character.
 *
 * @param  {String}   string
 * @param  {Function} replacement
 * @param  {Function|String} [separator]
 * @return {Array}
 */
var sanitizeString = function (string, replacement, separator) {
  var index = -1;

  return string
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([^a-zA-Z0-9]*)([a-zA-Z0-9]*)/g, function (_, $0, $1) {
      var prefix = $0;

      index += 1;

      if (prefix) {
        if (typeof separator === 'string') {
          prefix = separator;
        } else if (typeof separator === 'function') {
          prefix = separator($0, index, string);
        }
      }

      return prefix + replacement($1, index, string);
    });
};

/**
 * Exports object.
 *
 * @type {Object}
 */
var e = exports;

/**
 * Expose a mutable array of insignificant words that will not be title cased.
 *
 * @type {Array}
 */
e.insignificantWords = ['and'];

/**
 * Returns a boolean describing whether the string is all UPPERCASE or not.
 *
 * @param  {String} string
 * @return {Boolean}
 */
e.isUpperCase = acceptString(function (string) {
  return string === e.upperCase(string);
});

/**
 * Returns a boolean describing whether the string is all lowercase or not.
 *
 * @param  {String} string
 * @return {Boolean}
 */
e.isLowerCase = acceptString(function (string) {
  return string === e.lowerCase(string);
});

/**
 * Lowercase a passed in string.
 *
 * @param  {String} string
 * @return {String}
 */
e.lowerCase = acceptString(function (string) {
  return string.toLowerCase();
});

/**
 * Uppercase a passed in string.
 *
 * @param  {String} string
 * @return {String}
 */
e.upperCase = acceptString(function (string) {
  return string.toUpperCase();
});

/**
 * Uppercase the first character of a string.
 *
 * @param  {String} string
 * @return {String}
 */
e.upperCaseFirst = acceptString(function (string) {
  return e.upperCase(string.charAt(0)) + string.substr(1);
});

/**
 * Lowercase the first character of a string.
 *
 * @param  {String} string
 * @return {String}
 */
e.lowerCaseFirst = acceptString(function (string) {
  return e.lowerCase(string.charAt(0)) + string.substr(1);
});

/**
 * Title case a passed in string. Pass an optional boolean flag to title case
 * all words. Default behaviour is to skip insignicant words.
 *
 * @param  {String}  string
 * @param  {Boolean} significant
 * @return {String}
 */
e.titleCase = e.title = acceptString(function (string, significant) {
  return string
    // Remove prefixed whitespace.
    .replace(/^\s/, '')
    // Remove suffixed whitespace.
    .replace(/\s$/, '')
    // Turn all whitespace into a single space character.
    .replace(/\s+/g, ' ')
    // Replace word strings. Matches "W.H.O", "tests'", "test's", "test", etc.
    .replace(
      /(?:(?:[a-zA-Z]\.)+[a-zA-Z]|[a-zA-Z\'\-]+[a-zA-Z]*)/g,
      function (word, index) {
        // Uppercase "W.H.O"
        if (/(?:[a-zA-Z]\.)+[a-zA-Z]/g.test(word)) {
          return e.upperCase(word);
        }

        if (!significant && index > 0) {
          if (word.length < 3 || ~e.insignificantWords.indexOf(word)) {
            return e.lowerCase(word);
          }
        }

        return e.upperCaseFirst(e.lowerCase(word));
      })
    // Fix broken sentence formatting.
    .replace(/(\.\,\!\?\;)([a-zA-Z0-9]+) /g, '$1 $2');
});

/**
 * Sentence case a passed in string. E.g. "TestString" => "test string".
 *
 * @param  {String} string
 * @return {String}
 */
e.sentenceCase = e.sentence = acceptString(function (string) {
  return sanitizeString(string, e.lowerCase, ' ');
});

/**
 * Pascal case a passed in string. E.g. "test string" => "TestString".
 *
 * @param  {String} string
 * @return {String}
 */
e.pascalCase = e.pascal = acceptString(function (string) {
  return sanitizeString(string, function (word) {
    return e.upperCaseFirst(e.lowerCase(word));
  }, '');
});

/**
 * Camel case a passed in string. E.g. "test string" => "testString".
 *
 * @param  {String} string
 * @return {String}
 */
e.camelCase = e.camel = acceptString(function (string) {
  return e.lowerCaseFirst(e.pascalCase(string));
});

/**
 * Snake case a passed in string. E.g. "test string" => "test_string".
 *
 * @param  {String} string
 * @return {String}
 */
e.snakeCase = e.snake = acceptString(function (string) {
  return sanitizeString(string, e.lowerCase, '_');
});

/**
 * Param case a passed in string. E.g. "test string" => "test-string".
 *
 * @param  {String} string
 * @return {String}
 */
e.paramCase = e.param = acceptString(function (string) {
  return sanitizeString(string, e.lowerCase, '-');
});

/**
 * Dot case a passed in string. E.g. "test string" => "test.string".
 *
 * @param  {String} string
 * @return {String}
 */
e.dotCase = e.dot = acceptString(function (string) {
  return sanitizeString(string, e.lowerCase, '.');
});

/**
 * Path case a passed in string. E.g. "test string" => "test/string".
 *
 * @param  {String} string
 * @return {String}
 */
e.pathCase = e.path = acceptString(function (string) {
  return sanitizeString(string, e.lowerCase, '/');
});

/**
 * Constant case a passed in string. E.g. "test string" => "TEST_STRING".
 *
 * @param  {String} string
 * @return {String}
 */
e.constantCase = e.constant = acceptString(function (string) {
  return sanitizeString(string, e.upperCase, '_');
});

/**
 * Reverse the case of a string. E.g. "Test String" => "tEST sTRING".
 *
 * @param  {String} string
 * @return {String}
 */
e.switchCase = e.switch = acceptString(function (string) {
  return string.replace(/[a-zA-Z]/g, function (c) {
    var u = e.upperCase(c);
    return c === u ? e.lowerCase(c) : u;
  });
});
