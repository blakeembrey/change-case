var acceptString = function (fn) {
  return function (string) {
    if (typeof string !== 'string') {
      throw new TypeError('Changing the case only works on strings');
    }
    return fn.apply(null, arguments);
  };
};

var splitWords = function (word) {
  return word.replace(/([a-z0-9])([A-Z])/, '$1 $2').split(/[^a-zA-Z0-9]/).map(e.lower);
};

var e = exports; // Alias `exports` object so I don't have to type as much

e.insignificantWords = ['and'];

e.lowerCase = e.lower = acceptString(function (str) {
  return str.toLowerCase();
});

e.upperCase = e.upper = acceptString(function (str) {
  return str.toUpperCase();
});

e.titleCase = e.title = acceptString(function (str, isSignificant) {
  return splitWords(str).map(function (word) {
    if (!isSignificant && (word.length < 3 || ~e.insignificantWords.indexOf(word))) {
      return word;
    }
    return e.upper(word[0]) + word.slice(1);
  }).join(' ');
});

e.pascalCase = e.pascal = acceptString(function (str) {
  return splitWords(str).map(e.title).join('');
});

e.camelCase = e.camel = acceptString(function (str) {
  str = e.pascal(str);
  return e.lower(str[0]) + str.slice(1);
});

e.snakeCase = e.snake = acceptString(function (str) {
  return splitWords(str).join('_');
});

e.paramCase = e.param = acceptString(function (str) {
  return splitWords(str).join('-');
});

e.dotCase = e.dot = acceptString(function (str) {
  return splitWords(str).join('.');
});

e.pathCase = e.path = acceptString(function (str) {
  return splitWords(str).join('/');
});

e.constantCase = e.constant = acceptString(function (str) {
  return splitWords(str).map(e.upper).join('_');
});

e.switchCase = e.switch = acceptString(function (str) {
  var output = '',
      char;

  for (var i = 0; i < str.length; i++) {
    char = str.charAt(i);
    output += (char === e.upper(char) ? e.lower(char) : e.upper(char));
  }

  return output;
});
