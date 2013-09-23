# Change Case

Quickly convert strings between camelCase, PascalCase, Title Case, snake_case, lowercase, UPPERCASE, CONSTANT_CASE, etc.

## Installation

```
npm install change-case --save
```

## API

```js
var changeCase = require('change-case');
```

**upperCase** changeCase.upperCase(string)

Upper cases a string.

```js
changeCase.upperCase('test string');
--> "TEST STRING"
```

**lowerCase** changeCase.lowerCase(string)

Lower cases a string.

```js
changeCase.lowerCase('TEST STRING');
--> "test string"
```

**upperCaseFirst** changeCase.upperCaseFirst(string)

Upper cases only the first character of a string.

```js
changeCase.upperCaseFirst('test string');
--> "Test string"
```

**lowerCaseFirst** changeCase.lowerCaseFirst(string)

Lower cases only the first character of a string.

```js
changeCase.lowerCaseFirst('TEST STRING');
--> "tEST STRING"
```

**titleCase** changeCase.titleCase(string)

Title cases a string, useful for user inputted values being shown as titles. It does minimal sanitization of characters and will not handle non-sentence formats correctly (since it risks breaking formatting). If you need to parse a string in a different format, pass it through `sentenceCase` first.

```js
changeCase.titleCase('a simple test');
--> "A Simple Test"
```

**sentenceCase** changeCase.sentenceCase(string)

Transforms a string from any format to a lower cased sentence.

```js
changeCase.sentenceCase('testString');
--> "test string"
```

**camelCase** changeCase.camelCase(string)

Converts a string to a camel cased word.

```js
changeCase.camelCase('test string');
--> "testString"
```

**snakeCase** changeCase.snakeCase(string)

Converts a string to an underscore separated string.

```js
changeCase.snakeCase('test string');
--> "test_string"
```

**paramCase** changeCase.paramCase(string)

Converts a string to a dash separated string.

```js
changeCase.paramCase('test string');
--> "test-case"
```

**dotCase** changeCase.dotCase(string)

Converts a string to a period separated string.

```js
changeCase.dotCase('test string');
--> "test.string"
```

**pathCase** changeCase.pathCase(string)

Converts a string to a slash separated string.

```js
changeCase.pathCase('test string');
--> "test/string"
```

**constantCase** changeCase.constantCase(string)

Converts a string to a constant styled string (upper case separated by underscores).

```js
changeCase.constantCase('test string');
--> "TEST_STRING"
```

**switchCase** changeCase.switchCase(string)

Reverses the strings case.

```js
changeCase.switchCase('Test String');
--> "tEST sTRING"
```

## License

MIT
