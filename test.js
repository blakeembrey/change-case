/* global describe, it */
var assert     = require('assert');
var changeCase = require('./');

describe('change case', function () {
  it('should convert to lower case', function () {
    assert.equal(changeCase.lower('test'), 'test');
    assert.equal(changeCase.lowerCase('TEST'), 'test');
  });

  it('should convert to upper case', function () {
    assert.equal(changeCase.upper('TEST'), 'TEST');
    assert.equal(changeCase.upperCase('test'), 'TEST');
  });

  it('should upper case the first character', function () {
    assert.equal(changeCase.ucFirst('TEST'), 'TEST');
    assert.equal(changeCase.upperCaseFirst('test'), 'Test');
  });

  it('should determine whether a string is all upper case or not', function () {
    assert.equal(changeCase.isUpper('ALLUPPERCASE'), true);
    assert.equal(changeCase.isUpperCase('NotAllUpperCase'), false);
    assert.equal(changeCase.isUpperCase('alllowercase'), false);
  });

  it('should determine whether a string is all upper case or not', function () {
    assert.equal(changeCase.isLower('ALLUPPERCASE'), false);
    assert.equal(changeCase.isLowerCase('NotAllLowerCase'), false);
    assert.equal(changeCase.isLowerCase('alllowercase'), true);
  });

  it('should convert to title case', function () {
    assert.equal(changeCase.title('a test sentence'), 'A Test Sentence');
    assert.equal(changeCase.titleCase('i found a bug'), 'I Found A Bug');
    assert.equal(changeCase.titleCase('some things\''), 'Some Things');
    assert.equal(changeCase.titleCase('"quotes"'), 'Quotes');
    assert.equal(changeCase.titleCase('hyphen-ness'), 'Hyphen Ness');
  });

  it('should convert to sentence case', function () {
    assert.equal(changeCase.sentence('a-simple-test'), 'a simple test');
    assert.equal(changeCase.sentenceCase('this is a test'), 'this is a test');
    assert.equal(changeCase.sentenceCase('this_is_a_test'), 'this is a test');
    assert.equal(changeCase.sentenceCase('this-is-a-test'), 'this is a test');
  });

  it('should convert to camel case', function () {
    assert.equal(changeCase.camel('TestString'), 'testString');
    assert.equal(changeCase.camelCase('Test String'), 'testString');
    assert.equal(changeCase.camelCase('Test_String'), 'testString');
    assert.equal(changeCase.camelCase('Test-String'), 'testString');
    assert.equal(changeCase.camelCase('Facebook API'), 'facebookApi');
    assert.equal(changeCase.camelCase('-webkit-transform'), 'webkitTransform');
    assert.equal(changeCase.camelCase('fooBarBaz'), 'fooBarBaz');
    assert.equal(changeCase.camelCase('some (things)'), 'someThings');
  });

  it('should convert to pascal case', function () {
    assert.equal(changeCase.pascal('testString'),  'TestString');
    assert.equal(changeCase.pascalCase('Test String'), 'TestString');
    assert.equal(changeCase.pascalCase('Test_String'), 'TestString');
    assert.equal(changeCase.pascalCase('Test-String'), 'TestString');
    assert.equal(changeCase.pascalCase('Facebook API'), 'FacebookApi');
    assert.equal(changeCase.pascalCase('a-test-again'), 'ATestAgain');
    assert.equal(changeCase.pascalCase('a---better__test'), 'ABetterTest');
  });

  it('should convert to snake case', function () {
    assert.equal(changeCase.snake('testString'),  'test_string');
    assert.equal(changeCase.snakeCase('Test String'), 'test_string');
    assert.equal(changeCase.snakeCase('Test_String'), 'test_string');
    assert.equal(changeCase.snakeCase('Test-String'), 'test_string');
    assert.equal(changeCase.snakeCase('a---better__test'), 'a_better_test');
  });

  it('should convert to param case', function () {
    assert.equal(changeCase.param('testString'),  'test-string');
    assert.equal(changeCase.paramCase('Test String'), 'test-string');
    assert.equal(changeCase.paramCase('Test_String'), 'test-string');
    assert.equal(changeCase.paramCase('Test-String'), 'test-string');
    assert.equal(changeCase.paramCase('a---better__test'), 'a-better-test');
  });

  it('should convert to constant case', function () {
    assert.equal(changeCase.constant('testString'),  'TEST_STRING');
    assert.equal(changeCase.constantCase('Test String'), 'TEST_STRING');
    assert.equal(changeCase.constantCase('Test_String'), 'TEST_STRING');
    assert.equal(changeCase.constantCase('Test-String'), 'TEST_STRING');
    assert.equal(changeCase.constantCase('a---better__test'), 'A_BETTER_TEST');
  });

  it('should convert to dot case', function () {
    assert.equal(changeCase.dot('testString'),  'test.string');
    assert.equal(changeCase.dotCase('Test String'), 'test.string');
    assert.equal(changeCase.dotCase('Test_String'), 'test.string');
    assert.equal(changeCase.dotCase('Test-String'), 'test.string');
    assert.equal(changeCase.dotCase('a---better__test'), 'a.better.test');
  });

  it('should convert to path case', function () {
    assert.equal(changeCase.path('testString'),  'test/string');
    assert.equal(changeCase.pathCase('Test String'), 'test/string');
    assert.equal(changeCase.pathCase('Test_String'), 'test/string');
    assert.equal(changeCase.pathCase('Test-String'), 'test/string');
    assert.equal(changeCase.pathCase('a---better__test'), 'a/better/test');
  });

  it('should swap the cases', function () {
    assert.equal(changeCase.swap('RaNdOMcasE'), 'rAnDomCASe');
    assert.equal(changeCase.swapCase('mIX It.Down?'), 'Mix iT.dOWN?');
  });
});
