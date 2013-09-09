/* global describe, it */
var assert     = require('assert'),
    changeCase = require('./');

describe('change case', function () {
  it('should convert to lower case', function () {
    assert.equal(changeCase.lowerCase('TEST'), 'test');
  });

  it('should convert to upper case', function () {
    assert.equal(changeCase.upperCase('test'), 'TEST');
  });

  it('should convert to title case', function () {
    assert.equal(changeCase.titleCase('a-simple-test'), 'A Simple Test');
    assert.equal(changeCase.titleCase('this is a test'), 'This is a Test');
    assert.equal(changeCase.titleCase('this_is_a_test'), 'This is a Test');
    assert.equal(changeCase.titleCase('this-is-a-test'), 'This is a Test');
    assert.equal(changeCase.titleCase('this is a test', true), 'This Is A Test');
  });

  it('should convert to camel case', function () {
    assert.equal(changeCase.camelCase('TestString'),  'testString');
    assert.equal(changeCase.camelCase('Test String'), 'testString');
    assert.equal(changeCase.camelCase('Test_String'), 'testString');
    assert.equal(changeCase.camelCase('Test-String'), 'testString');
  });

  it('should convert to pascal case', function () {
    assert.equal(changeCase.pascalCase('testString'),  'TestString');
    assert.equal(changeCase.pascalCase('Test String'), 'TestString');
    assert.equal(changeCase.pascalCase('Test_String'), 'TestString');
    assert.equal(changeCase.pascalCase('Test-String'), 'TestString');
    assert.equal(changeCase.pascalCase('a-test-again'), 'ATestAgain');
  });

  it('should convert to snake case', function () {
    assert.equal(changeCase.snakeCase('testString'),  'test_string');
    assert.equal(changeCase.snakeCase('Test String'), 'test_string');
    assert.equal(changeCase.snakeCase('Test_String'), 'test_string');
    assert.equal(changeCase.snakeCase('Test-String'), 'test_string');
  });

  it('should convert to param case', function () {
    assert.equal(changeCase.paramCase('testString'),  'test-string');
    assert.equal(changeCase.paramCase('Test String'), 'test-string');
    assert.equal(changeCase.paramCase('Test_String'), 'test-string');
    assert.equal(changeCase.paramCase('Test-String'), 'test-string');
  });

  it('should convert to constant case', function () {
    assert.equal(changeCase.constantCase('testString'),  'TEST_STRING');
    assert.equal(changeCase.constantCase('Test String'), 'TEST_STRING');
    assert.equal(changeCase.constantCase('Test_String'), 'TEST_STRING');
    assert.equal(changeCase.constantCase('Test-String'), 'TEST_STRING');
  });

  it('should convert to dot case', function () {
    assert.equal(changeCase.dotCase('testString'),  'test.string');
    assert.equal(changeCase.dotCase('Test String'), 'test.string');
    assert.equal(changeCase.dotCase('Test_String'), 'test.string');
    assert.equal(changeCase.dotCase('Test-String'), 'test.string');
  });

  it('should convert to path case', function () {
    assert.equal(changeCase.pathCase('testString'),  'test/string');
    assert.equal(changeCase.pathCase('Test String'), 'test/string');
    assert.equal(changeCase.pathCase('Test_String'), 'test/string');
    assert.equal(changeCase.pathCase('Test-String'), 'test/string');
  });

  it('should switch the cases', function () {
    assert.equal(changeCase.switchCase('RaNdOMcasE'), 'rAnDomCASe');
    assert.equal(changeCase.switchCase('mIX It.Down?'), 'Mix iT.dOWN?');
  });
});
