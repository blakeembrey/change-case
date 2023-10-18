import { describe, it, expect } from "vitest";
import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  kebabCase,
  noCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
  split,
  trainCase,
  Options,
} from "./index.js";

type Result = {
  split: string[];
  camelCase: string;
  capitalCase: string;
  constantCase: string;
  dotCase: string;
  kebabCase: string;
  noCase: string;
  pascalCase: string;
  pascalSnakeCase: string;
  pathCase: string;
  sentenceCase: string;
  snakeCase: string;
  trainCase: string;
};

const tests: [string, Result, Options?][] = [
  [
    "",
    {
      split: [],
      camelCase: "",
      capitalCase: "",
      constantCase: "",
      dotCase: "",
      kebabCase: "",
      noCase: "",
      pascalCase: "",
      pascalSnakeCase: "",
      pathCase: "",
      sentenceCase: "",
      snakeCase: "",
      trainCase: "",
    },
  ],
  [
    "test",
    {
      split: ["test"],
      camelCase: "test",
      capitalCase: "Test",
      constantCase: "TEST",
      dotCase: "test",
      kebabCase: "test",
      noCase: "test",
      pascalCase: "Test",
      pascalSnakeCase: "Test",
      pathCase: "test",
      sentenceCase: "Test",
      snakeCase: "test",
      trainCase: "Test",
    },
  ],
  [
    "test string",
    {
      split: ["test", "string"],
      camelCase: "testString",
      capitalCase: "Test String",
      constantCase: "TEST_STRING",
      dotCase: "test.string",
      kebabCase: "test-string",
      noCase: "test string",
      pascalCase: "TestString",
      pascalSnakeCase: "Test_String",
      pathCase: "test/string",
      sentenceCase: "Test string",
      snakeCase: "test_string",
      trainCase: "Test-String",
    },
  ],
  [
    "Test String",
    {
      split: ["Test", "String"],
      camelCase: "testString",
      capitalCase: "Test String",
      constantCase: "TEST_STRING",
      dotCase: "test.string",
      kebabCase: "test-string",
      noCase: "test string",
      pascalCase: "TestString",
      pascalSnakeCase: "Test_String",
      pathCase: "test/string",
      sentenceCase: "Test string",
      snakeCase: "test_string",
      trainCase: "Test-String",
    },
  ],
  [
    "TestV2",
    {
      split: ["Test", "V2"],
      camelCase: "testV2",
      capitalCase: "Test V2",
      constantCase: "TEST_V2",
      dotCase: "test.v2",
      kebabCase: "test-v2",
      noCase: "test v2",
      pascalCase: "TestV2",
      pascalSnakeCase: "Test_V2",
      pathCase: "test/v2",
      sentenceCase: "Test v2",
      snakeCase: "test_v2",
      trainCase: "Test-V2",
    },
  ],
  [
    "_foo_bar",
    {
      split: ["foo", "bar"],
      camelCase: "_fooBar",
      capitalCase: "_Foo Bar",
      constantCase: "_FOO_BAR",
      dotCase: "_foo.bar",
      kebabCase: "_foo-bar",
      noCase: "_foo bar",
      pascalCase: "_FooBar",
      pascalSnakeCase: "_Foo_Bar",
      pathCase: "_foo/bar",
      sentenceCase: "_Foo bar",
      snakeCase: "_foo_bar",
      trainCase: "_Foo-Bar",
    },
  ],
  [
    "version 1.2.10",
    {
      split: ["version", "1", "2", "10"],
      camelCase: "version_1_2_10",
      capitalCase: "Version 1 2 10",
      constantCase: "VERSION_1_2_10",
      dotCase: "version.1.2.10",
      kebabCase: "version-1-2-10",
      noCase: "version 1 2 10",
      pascalCase: "Version_1_2_10",
      pascalSnakeCase: "Version_1_2_10",
      pathCase: "version/1/2/10",
      sentenceCase: "Version 1 2 10",
      snakeCase: "version_1_2_10",
      trainCase: "Version-1-2-10",
    },
  ],
  [
    "version 1.21.0",
    {
      split: ["version", "1", "21", "0"],
      camelCase: "version_1_21_0",
      capitalCase: "Version 1 21 0",
      constantCase: "VERSION_1_21_0",
      dotCase: "version.1.21.0",
      kebabCase: "version-1-21-0",
      noCase: "version 1 21 0",
      pascalCase: "Version_1_21_0",
      pascalSnakeCase: "Version_1_21_0",
      pathCase: "version/1/21/0",
      sentenceCase: "Version 1 21 0",
      snakeCase: "version_1_21_0",
      trainCase: "Version-1-21-0",
    },
  ],
  [
    "TestV2",
    {
      split: ["Test", "V", "2"],
      camelCase: "testV_2",
      capitalCase: "Test V 2",
      constantCase: "TEST_V_2",
      dotCase: "test.v.2",
      kebabCase: "test-v-2",
      noCase: "test v 2",
      pascalCase: "TestV_2",
      pascalSnakeCase: "Test_V_2",
      pathCase: "test/v/2",
      sentenceCase: "Test v 2",
      snakeCase: "test_v_2",
      trainCase: "Test-V-2",
    },
    { separateNumbers: true },
  ],
  [
    "1test",
    {
      split: ["1", "test"],
      camelCase: "1Test",
      capitalCase: "1 Test",
      constantCase: "1_TEST",
      dotCase: "1.test",
      kebabCase: "1-test",
      noCase: "1 test",
      pascalCase: "1Test",
      pascalSnakeCase: "1_Test",
      pathCase: "1/test",
      sentenceCase: "1 test",
      snakeCase: "1_test",
      trainCase: "1-Test",
    },
    { separateNumbers: true },
  ],
  [
    "Foo12019Bar",
    {
      split: ["Foo", "12019", "Bar"],
      camelCase: "foo_12019Bar",
      capitalCase: "Foo 12019 Bar",
      constantCase: "FOO_12019_BAR",
      dotCase: "foo.12019.bar",
      kebabCase: "foo-12019-bar",
      noCase: "foo 12019 bar",
      pascalCase: "Foo_12019Bar",
      pascalSnakeCase: "Foo_12019_Bar",
      pathCase: "foo/12019/bar",
      sentenceCase: "Foo 12019 bar",
      snakeCase: "foo_12019_bar",
      trainCase: "Foo-12019-Bar",
    },
    { separateNumbers: true },
  ],
  [
    "aNumber2in",
    {
      split: ["a", "Number", "2", "in"],
      camelCase: "aNumber_2In",
      capitalCase: "A Number 2 In",
      constantCase: "A_NUMBER_2_IN",
      dotCase: "a.number.2.in",
      kebabCase: "a-number-2-in",
      noCase: "a number 2 in",
      pascalCase: "ANumber_2In",
      pascalSnakeCase: "ANumber_2_In",
      pathCase: "a/number/2/in",
      sentenceCase: "A number 2 in",
      snakeCase: "a_number_2_in",
      trainCase: "A-Number-2-In",
    },
    { separateNumbers: true },
  ],
  [
    "V1Test",
    {
      split: ["V1", "Test"],
      camelCase: "v1Test",
      capitalCase: "V1 Test",
      constantCase: "V1_TEST",
      dotCase: "v1.test",
      kebabCase: "v1-test",
      noCase: "v1 test",
      pascalCase: "V1Test",
      pascalSnakeCase: "V1_Test",
      pathCase: "v1/test",
      sentenceCase: "V1 test",
      snakeCase: "v1_test",
      trainCase: "V1-Test",
    },
  ],
  [
    "V1Test with separateNumbers",
    {
      split: ["V", "1", "Test", "with", "separate", "Numbers"],
      camelCase: "v_1TestWithSeparateNumbers",
      capitalCase: "V 1 Test With Separate Numbers",
      constantCase: "V_1_TEST_WITH_SEPARATE_NUMBERS",
      dotCase: "v.1.test.with.separate.numbers",
      kebabCase: "v-1-test-with-separate-numbers",
      noCase: "v 1 test with separate numbers",
      pascalCase: "V_1TestWithSeparateNumbers",
      pascalSnakeCase: "V_1_Test_With_Separate_Numbers",
      pathCase: "v/1/test/with/separate/numbers",
      sentenceCase: "V 1 test with separate numbers",
      snakeCase: "v_1_test_with_separate_numbers",
      trainCase: "V-1-Test-With-Separate-Numbers",
    },
    { separateNumbers: true },
  ],
  [
    "__typename",
    {
      split: ["typename"],
      camelCase: "__typename",
      capitalCase: "__Typename",
      constantCase: "__TYPENAME",
      dotCase: "__typename",
      kebabCase: "__typename",
      noCase: "__typename",
      pascalCase: "__Typename",
      pascalSnakeCase: "__Typename",
      pathCase: "__typename",
      sentenceCase: "__Typename",
      snakeCase: "__typename",
      trainCase: "__Typename",
    },
  ],
];

describe("change case", () => {
  for (const [input, result, options] of tests) {
    it(input, () => {
      expect(split(input, options)).toEqual(result.split);
      expect(camelCase(input, options)).toEqual(result.camelCase);
      expect(capitalCase(input, options)).toEqual(result.capitalCase);
      expect(constantCase(input, options)).toEqual(result.constantCase);
      expect(dotCase(input, options)).toEqual(result.dotCase);
      expect(trainCase(input, options)).toEqual(result.trainCase);
      expect(kebabCase(input, options)).toEqual(result.kebabCase);
      expect(noCase(input, options)).toEqual(result.noCase);
      expect(pascalCase(input, options)).toEqual(result.pascalCase);
      expect(pathCase(input, options)).toEqual(result.pathCase);
      expect(sentenceCase(input, options)).toEqual(result.sentenceCase);
      expect(snakeCase(input, options)).toEqual(result.snakeCase);
    });
  }
});
