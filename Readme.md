# Change Case

Quickly convert strings between camelCase, PascalCase, Title Case, snake_case, lowercase, UPPERCASE, CONSTANT_CASE, etc.

## Installation

```
npm install change-case --save
```

## API

```
var changeCase = require('change-case');
```

* changeCase.upperCase(string)
* changeCase.lowerCase(string)
* changeCase.titleCase(string [, ignoreInsignificantWords])
* changeCase.camelCase(string)
* changeCase.snakeCase(string)
* changeCase.paramCase(string)
* changeCase.dotCase(string)
* changeCase.pathCase(string)
* changeCase.constantCase(string)
* changeCase.switchCase(string)

```javascript
changeCase.upperCase('test string') // "TEST STRING"
changeCase.lowerCase('TEST STRING') // "test string"
changeCase.titleCase('test string') // "Test String"
changeCase.titleCase('this is a test string', true) // "This is a Test String"
changeCase.camelCase('test string') // "testString"
changeCase.snakeCase('test string') // "test_string"
changeCase.paramCase('test string') // "TestString"
changeCase.dotCase('test string') // "test.string"
changeCase.pathCase('test string') // "test/string"
changeCase.constantCase('test string') // "TEST_STRING"
changeCase.switchCase('TeST stRInG') // "tEst STriNg"
```

## License

MIT
