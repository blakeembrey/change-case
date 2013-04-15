var acceptString = function (fn) {
  return function (string) {
    if (typeof string !== 'string') {
      throw new TypeError('Changing the case only works on strings');
    }
    return fn.apply(null, arguments);
  };
};

var lowerCase = exports.lowerCase = exports.lower = acceptString(function (str) {
  return str.toLowerCase();
});

var upperCase = exports.upperCase = exports.upper = acceptString(function (str) {
  return str.toUpperCase();
});

var splitWords = function (word) {
  return word.replace(/([a-z0-9])([A-Z])/, '$1 $2').split(/[^a-zA-Z0-9]/).map(lowerCase);
};

var titleCase = exports.titleCase = exports.title = acceptString(function (str, isSignificant) {
  return splitWords(str).map(function (word) {
    word = lowerCase(word);
    if (!isSignificant && (word.length < 3 || ~['and'].indexOf(word))) {
      return word;
    }
    return upperCase(word[0]) + word.slice(1);
  }).join(' ');
});

var pascalCase = exports.pascalCase = acceptString(function (str) {
  return splitWords(str).map(titleCase).join('');
});

exports.camelCase = exports.camel = acceptString(function (str) {
  str = pascalCase(str);
  return lowerCase(str[0]) + str.slice(1);
});

exports.snakeCase = exports.snake = acceptString(function (str) {
  return splitWords(str).join('_');
});

exports.paramCase = exports.param = acceptString(function (str) {
  return splitWords(str).join('-');
});

exports.dotCase = exports.dot = acceptString(function (str) {
  return splitWords(str).join('.');
});

exports.pathCase = exports.path = acceptString(function (str) {
  return splitWords(str).join('/');
});

exports.constantCase = exports.constant = acceptString(function (str) {
  return splitWords(str).map(upperCase).join('_');
});
