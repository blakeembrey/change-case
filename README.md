# Change Case

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]

Convert strings between `camelCase`, `PascalCase`, `Title Case`, `snake_case`, `lowercase`, `UPPERCASE`, `CONSTANT_CASE` and more.

All methods support non-ASCII characters and non-string entities, such as objects with a `toString` property, numbers and booleans. Empty values (`null` and `undefined`) will result in an empty string.

Every method is also available on npm as individual packages.

## Installation

```
npm install change-case --save
```

## Usage

```js
var changeCase = require('change-case');
//=> { isUpperCase: [Function], ... }
```

[isUpperCase](https://github.com/blakeembrey/is-upper-case) changeCase.isUpper(string)

Return a boolean indicating whether the string is upper cased.

```js
changeCase.isUpperCase('test string');
//=> false
```

[isLowerCase](https://github.com/blakeembrey/is-lower-case) changeCase.isLower(string)

Return a boolean indicating whether the string is lower cased.

```js
changeCase.isLowerCase('test string');
//=> true
```

[upperCase](https://github.com/blakeembrey/upper-case) changeCase.upper(string)

Return the string in upper case.

```js
changeCase.upperCase('test string');
//=> "TEST STRING"
```

[upperCaseFirst](https://github.com/blakeembrey/upper-case-first) changeCase.ucFirst(string)

Return the string with the first character upper cased.

```js
changeCase.upperCaseFirst('test');
//=> "Test"
```

[lowerCase](https://github.com/blakeembrey/lower-case) changeCase.lower(string)

Return the string in lower case.

```js
changeCase.lowerCase('TEST STRING');
//=> "test string"
```

[sentenceCase](https://github.com/blakeembrey/sentence-case) changeCase.sentence(string)

Return as a lower case, space separated string.

```js
changeCase.sentenceCase('testString');
//=> "test string"
```

[titleCase](https://github.com/blakeembrey/title-case) changeCase.title(string)

Return as a space separated string with the first character of every word upper cased.

```js
changeCase.titleCase('a simple test');
//=> "A Simple Test"
```

[camelCase](https://github.com/blakeembrey/camel-case) changeCase.camel(string)

Return as a string with the separators denoted by having the next letter capitalized.

```js
changeCase.camelCase('test string');
//=> "testString"
```

[pascalCase](https://github.com/blakeembrey/pascal-case) changeCase.pascal(string)

Return as a string denoted in the same fashion as `camelCase`, but with the first letter also capitalized.

```js
changeCase.pascalCase('test string');
//=> "TestString"
```

[snakeCase](https://github.com/blakeembrey/snake-case) changeCase.snake(string)

Return as a lower case, underscore separated string.

```js
changeCase.snakeCase('test string');
--> "test_string"
```

[paramCase](https://github.com/blakeembrey/param-case) changeCase.param(string)

Return as a lower case, dash separated string.

```js
changeCase.paramCase('test string');
//=> "test-case"
```

[dotCase](https://github.com/blakeembrey/dot-case) changeCase.dot(string)

Return as a lower case, period separated string.

```js
changeCase.dotCase('test string');
//=> "test.string"
```

[pathCase](https://github.com/blakeembrey/path-case) changeCase.path(string)

Return as a lower case, slash separated string.

```js
changeCase.pathCase('test string');
//=> "test/string"
```

[constantCase](https://github.com/blakeembrey/constant-case) changeCase.constant(string)

Return as an upper case, underscore separated string.

```js
changeCase.constantCase('test string');
//=> "TEST_STRING"
```

[swapCase](https://github.com/blakeembrey/swap-case) changeCase.swap(string)

Return as a string with every character case reversed.

```js
changeCase.swapCase('Test String');
//=> "tEST sTRING"
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/change-case.svg?style=flat
[npm-url]: https://npmjs.org/package/change-case
[travis-image]: https://img.shields.io/travis/blakeembrey/change-case.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/change-case
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/change-case.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/change-case?branch=master
[gittip-image]: https://img.shields.io/gittip/blakeembrey.svg?style=flat
[gittip-url]: https://www.gittip.com/blakeembrey
