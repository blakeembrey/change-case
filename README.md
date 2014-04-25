# change-case

Quickly convert strings between `camelCase`, `PascalCase`, `Title Case`, `snake_case`, `lowercase`, `UPPERCASE`, `CONSTANT_CASE` and more.

## Installation

```
npm install change-case --save
```

## Usage

```js
var changeCase = require('change-case');
//=> { isUpperCase: [Function], ... }
```

**isUpperCase** changeCase.isUpper(string)

Return a boolean indicating the string is upper cased.

```js
changeCase.isUpperCase('test string');
//=> false
```

**isLowerCase** changeCase.isLower(string)

Return a boolean indicating the string is lower cased.

```js
changeCase.isLowerCase('test string');
//=> true
```

**upperCase** changeCase.upper(string)

Return an upper cased string.

```js
changeCase.upperCase('test string');
//=> "TEST STRING"
```

**upperCaseFirst** changeCase.ucFirst(string)

Return a string with the first character upper cased.

```js
changeCase.upperCaseFirst('test');
//=> "Test"
```

**lowerCase** changeCase.lower(string)

Return a lower cased string.

```js
changeCase.lowerCase('TEST STRING');
//=> "test string"
```

**titleCase** changeCase.title(string)

Return a space separated string with the first character of every word upper cased.

```js
changeCase.titleCase('a simple test');
//=> "A Simple Test"
```

**sentenceCase** changeCase.sentence(string)

Return a lower cased, space separated string.

```js
changeCase.sentenceCase('testString');
//=> "test string"
```

**camelCase** changeCase.camel(string)

Return a string with the separators denoted by having the next letter capitalized.

```js
changeCase.camelCase('test string');
//=> "testString"
```

**pascalCase** changeCase.pascal(string)

Return a string denoted in the same fashion as `camelCase`, but with the first letter capitalized.

```js
changeCase.pascalCase('test string');
//=> "TestString"
```

**snakeCase** changeCase.snake(string)

Return a lower cased, space separated string.

```js
changeCase.snakeCase('test string');
--> "test_string"
```

**paramCase** changeCase.param(string)

Return a lower cased, dash separated string.

```js
changeCase.paramCase('test string');
//=> "test-case"
```

**dotCase** changeCase.dot(string)

Return a lower cased, period separated string.

```js
changeCase.dotCase('test string');
//=> "test.string"
```

**pathCase** changeCase.path(string)

Return a lower cased, slash separated string.

```js
changeCase.pathCase('test string');
//=> "test/string"
```

**constantCase** changeCase.constant(string)

Return an upper cased, underscore separated string.

```js
changeCase.constantCase('test string');
//=> "TEST_STRING"
```

**swapCase** changeCase.swap(string)

Return a string with lower case characters upper cased and upper case character lower cased.

```js
changeCase.swapCase('Test String');
//=> "tEST sTRING"
```

## License

MIT
