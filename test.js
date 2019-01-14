/* global describe, it */
var assert = require('assert')
var changeCase = require('./')

describe('change case', function () {
  it('should convert to lower case', function () {
    assert.strictEqual(changeCase.lower('test'), 'test')
    assert.strictEqual(changeCase.lowerCase('TEST'), 'test')
  })

  it('should convert to upper case', function () {
    assert.strictEqual(changeCase.upper('TEST'), 'TEST')
    assert.strictEqual(changeCase.upperCase('test'), 'TEST')
  })

  it('should upper case the first character', function () {
    assert.strictEqual(changeCase.ucFirst('TEST'), 'TEST')
    assert.strictEqual(changeCase.upperCaseFirst('test'), 'Test')
  })

  it('should lower case the first character', function () {
    assert.strictEqual(changeCase.lcFirst('TEST'), 'tEST')
    assert.strictEqual(changeCase.lowerCaseFirst('Test'), 'test')
  })

  it('should determine whether a string is all upper case or not', function () {
    assert.strictEqual(changeCase.isUpper('ALLUPPERCASE'), true)
    assert.strictEqual(changeCase.isUpperCase('NotAllUpperCase'), false)
    assert.strictEqual(changeCase.isUpperCase('alllowercase'), false)
  })

  it('should determine whether a string is all lower case or not', function () {
    assert.strictEqual(changeCase.isLower('ALLUPPERCASE'), false)
    assert.strictEqual(changeCase.isLowerCase('NotAllLowerCase'), false)
    assert.strictEqual(changeCase.isLowerCase('alllowercase'), true)
  })

  it('should convert to title case', function () {
    assert.strictEqual(changeCase.title('a test sentence'), 'A Test Sentence')
    assert.strictEqual(changeCase.titleCase('i found a bug'), 'I Found A Bug')
    assert.strictEqual(changeCase.titleCase("some things'"), 'Some Things')
    assert.strictEqual(changeCase.titleCase('"quotes"'), 'Quotes')
    assert.strictEqual(changeCase.titleCase('hyphen-ness'), 'Hyphen Ness')
  })

  it('should convert to no case', function () {
    assert.strictEqual(changeCase.no('a-simple-test'), 'a simple test')
    assert.strictEqual(changeCase.noCase('this is a test'), 'this is a test')
    assert.strictEqual(changeCase.noCase('this_is_a_test'), 'this is a test')
    assert.strictEqual(changeCase.noCase('this-is-a-test'), 'this is a test')
  })

  it('should convert to header case', function () {
    assert.strictEqual(changeCase.header('a-simple-test'), 'A-Simple-Test')
    assert.strictEqual(changeCase.headerCase('this is a test'), 'This-Is-A-Test')
    assert.strictEqual(changeCase.headerCase('this_is_a_test'), 'This-Is-A-Test')
    assert.strictEqual(changeCase.headerCase('this-is-a-test'), 'This-Is-A-Test')
  })

  it('should convert to sentence case', function () {
    assert.strictEqual(changeCase.sentence('a-simple-test'), 'A simple test')
    assert.strictEqual(changeCase.sentenceCase('this is a test'), 'This is a test')
    assert.strictEqual(changeCase.sentenceCase('this_is_a_test'), 'This is a test')
    assert.strictEqual(changeCase.sentenceCase('this-is-a-test'), 'This is a test')
  })

  it('should convert to camel case', function () {
    assert.strictEqual(changeCase.camel('TestString'), 'testString')
    assert.strictEqual(changeCase.camelCase('Test String'), 'testString')
    assert.strictEqual(changeCase.camelCase('Test_String'), 'testString')
    assert.strictEqual(changeCase.camelCase('Test-String'), 'testString')
    assert.strictEqual(changeCase.camelCase('Facebook API'), 'facebookApi')
    assert.strictEqual(changeCase.camelCase('-webkit-transform'), 'webkitTransform')
    assert.strictEqual(changeCase.camelCase('fooBarBaz'), 'fooBarBaz')
    assert.strictEqual(changeCase.camelCase('some (things)'), 'someThings')
  })

  it('should convert to pascal case', function () {
    assert.strictEqual(changeCase.pascal('testString'), 'TestString')
    assert.strictEqual(changeCase.pascalCase('Test String'), 'TestString')
    assert.strictEqual(changeCase.pascalCase('Test_String'), 'TestString')
    assert.strictEqual(changeCase.pascalCase('Test-String'), 'TestString')
    assert.strictEqual(changeCase.pascalCase('Facebook API'), 'FacebookApi')
    assert.strictEqual(changeCase.pascalCase('a-test-again'), 'ATestAgain')
    assert.strictEqual(changeCase.pascalCase('a---better__test'), 'ABetterTest')
  })

  it('should convert to snake case', function () {
    assert.strictEqual(changeCase.snake('testString'), 'test_string')
    assert.strictEqual(changeCase.snakeCase('Test String'), 'test_string')
    assert.strictEqual(changeCase.snakeCase('Test_String'), 'test_string')
    assert.strictEqual(changeCase.snakeCase('Test-String'), 'test_string')
    assert.strictEqual(changeCase.snakeCase('a---better__test'), 'a_better_test')
  })

  it('should convert to param case', function () {
    assert.strictEqual(changeCase.param('testString'), 'test-string')
    assert.strictEqual(changeCase.paramCase('Test String'), 'test-string')
    assert.strictEqual(changeCase.paramCase('Test_String'), 'test-string')
    assert.strictEqual(changeCase.paramCase('Test-String'), 'test-string')
    assert.strictEqual(changeCase.paramCase('a---better__test'), 'a-better-test')
  })

  it('should convert to kebab case', function () {
    assert.strictEqual(changeCase.kebab('testString'), 'test-string')
    assert.strictEqual(changeCase.kebabCase('Test String'), 'test-string')
    assert.strictEqual(changeCase.kebabCase('Test_String'), 'test-string')
    assert.strictEqual(changeCase.kebabCase('Test-String'), 'test-string')
    assert.strictEqual(changeCase.kebabCase('a---better__test'), 'a-better-test')
  })

  it('should convert to hyphen case', function () {
    assert.strictEqual(changeCase.hyphen('testString'), 'test-string')
    assert.strictEqual(changeCase.hyphenCase('Test String'), 'test-string')
    assert.strictEqual(changeCase.hyphenCase('Test_String'), 'test-string')
    assert.strictEqual(changeCase.hyphenCase('Test-String'), 'test-string')
    assert.strictEqual(changeCase.hyphenCase('a---better__test'), 'a-better-test')
  })

  it('should convert to constant case', function () {
    assert.strictEqual(changeCase.constant('testString'), 'TEST_STRING')
    assert.strictEqual(changeCase.constantCase('Test String'), 'TEST_STRING')
    assert.strictEqual(changeCase.constantCase('Test_String'), 'TEST_STRING')
    assert.strictEqual(changeCase.constantCase('Test-String'), 'TEST_STRING')
    assert.strictEqual(changeCase.constantCase('a---better__test'), 'A_BETTER_TEST')
  })

  it('should convert to dot case', function () {
    assert.strictEqual(changeCase.dot('testString'), 'test.string')
    assert.strictEqual(changeCase.dotCase('Test String'), 'test.string')
    assert.strictEqual(changeCase.dotCase('Test_String'), 'test.string')
    assert.strictEqual(changeCase.dotCase('Test-String'), 'test.string')
    assert.strictEqual(changeCase.dotCase('a---better__test'), 'a.better.test')
  })

  it('should convert to path case', function () {
    assert.strictEqual(changeCase.path('testString'), 'test/string')
    assert.strictEqual(changeCase.pathCase('Test String'), 'test/string')
    assert.strictEqual(changeCase.pathCase('Test_String'), 'test/string')
    assert.strictEqual(changeCase.pathCase('Test-String'), 'test/string')
    assert.strictEqual(changeCase.pathCase('a---better__test'), 'a/better/test')
  })

  it('should swap the cases', function () {
    assert.strictEqual(changeCase.swap('RaNdOMcasE'), 'rAnDomCASe')
    assert.strictEqual(changeCase.swapCase('mIX It.Down?'), 'Mix iT.dOWN?')
  })
})
