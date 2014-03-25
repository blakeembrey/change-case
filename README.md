# Change Case

Quickly convert strings between camelCase, PascalCase, Title Case, snake_case, lowercase, UPPERCASE, CONSTANT_CASE, etc.

## Installation

```
npm install change-case --save
```

## Usage

```js
var changeCase = require('change-case');
//=> { isUpperCase: [Function], ... }
```

**isUpperCase** changeCase.isUpperCase(string)

Return a boolean indicating the string is upper cased.

```js
changeCase.isUpperCase('test string');
//=> false
```

**isLowerCase** changeCase.isLowerCase(string)

Return a boolean indicating the string is lower cased.

```js
changeCase.isLowerCase('test string');
//=> true
```

**upperCase** changeCase.upperCase(string)

Return an upper cased string.

```js
changeCase.upperCase('test string');
//=> "TEST STRING"
```

**lowerCase** changeCase.lowerCase(string)

Return a lower cased string.

```js
changeCase.lowerCase('TEST STRING');
//=> "test string"
```

**titleCase** changeCase.titleCase(string)

Return a space separated string with the first character of every word upper cased.

```js
changeCase.titleCase('a simple test');
//=> "A Simple Test"
```

**sentenceCase** changeCase.sentenceCase(string)

Return a lower cased, space separated string.

```js
changeCase.sentenceCase('testString');
//=> "test string"
```

**camelCase** changeCase.camelCase(string)

Return a string with the separators denoted by having the next letter capitalized.

```js
changeCase.camelCase('test string');
//=> "testString"
```

**pascalCase** changeCase.pascalCase(string)

Return a string denoted in the same fashion as `camelCase`, but with the first letter also capitalized.

```js
changeCase.pascalCase('test string');
//=> "TestString"
```

**snakeCase** changeCase.snakeCase(string)

Return a lower cased, space separated string.

```js
changeCase.snakeCase('test string');
--> "test_string"
```

**paramCase** changeCase.paramCase(string)

Return a lower cased, dash separated string.

```js
changeCase.paramCase('test string');
//=> "test-case"
```

**dotCase** changeCase.dotCase(string)

Return a lower cased, period separated string.

```js
changeCase.dotCase('test string');
//=> "test.string"
```

**pathCase** changeCase.pathCase(string)

Return a lower cased, slash separated string.

```js
changeCase.pathCase('test string');
//=> "test/string"
```

**constantCase** changeCase.constantCase(string)

Return an upper cased, underscore separated string.

```js
changeCase.constantCase('test string');
//=> "TEST_STRING"
```

**swapCase** changeCase.swapCase(string)

Return a string with lower case characters upper cased and upper case character lower cased.

```js
changeCase.swapCase('Test String');
//=> "tEST sTRING"
```

## License

MIT
