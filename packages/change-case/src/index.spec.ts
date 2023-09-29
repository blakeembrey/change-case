import { describe, it, expect } from "vitest";
import {
  split,
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  kebabCase,
  noCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
  Options,
} from "./index.js";

type Result = {
  split: string[];
  camelCase: string;
  capitalCase: string;
  constantCase: string;
  dotCase: string;
  headerCase: string;
  kebabCase: string;
  noCase: string;
  pascalCase: string;
  pathCase: string;
  sentenceCase: string;
  snakeCase: string;
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
      headerCase: "",
      kebabCase: "",
      noCase: "",
      pascalCase: "",
      pathCase: "",
      sentenceCase: "",
      snakeCase: "",
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
      headerCase: "Test",
      kebabCase: "test",
      noCase: "test",
      pascalCase: "Test",
      pathCase: "test",
      sentenceCase: "Test",
      snakeCase: "test",
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
      headerCase: "Test-String",
      kebabCase: "test-string",
      noCase: "test string",
      pascalCase: "TestString",
      pathCase: "test/string",
      sentenceCase: "Test string",
      snakeCase: "test_string",
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
      headerCase: "Test-String",
      kebabCase: "test-string",
      noCase: "test string",
      pascalCase: "TestString",
      pathCase: "test/string",
      sentenceCase: "Test string",
      snakeCase: "test_string",
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
      headerCase: "Test-V2",
      kebabCase: "test-v2",
      noCase: "test v2",
      pascalCase: "TestV2",
      pathCase: "test/v2",
      sentenceCase: "Test v2",
      snakeCase: "test_v2",
    },
  ],
  [
    "_foo_bar_",
    {
      split: ["foo", "bar"],
      camelCase: "fooBar",
      capitalCase: "Foo Bar",
      constantCase: "FOO_BAR",
      dotCase: "foo.bar",
      headerCase: "Foo-Bar",
      kebabCase: "foo-bar",
      noCase: "foo bar",
      pascalCase: "FooBar",
      pathCase: "foo/bar",
      sentenceCase: "Foo bar",
      snakeCase: "foo_bar",
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
      headerCase: "Version-1-2-10",
      kebabCase: "version-1-2-10",
      noCase: "version 1 2 10",
      pascalCase: "Version_1_2_10",
      pathCase: "version/1/2/10",
      sentenceCase: "Version 1 2 10",
      snakeCase: "version_1_2_10",
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
      headerCase: "Version-1-21-0",
      kebabCase: "version-1-21-0",
      noCase: "version 1 21 0",
      pascalCase: "Version_1_21_0",
      pathCase: "version/1/21/0",
      sentenceCase: "Version 1 21 0",
      snakeCase: "version_1_21_0",
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
      headerCase: "Test-V-2",
      kebabCase: "test-v-2",
      noCase: "test v 2",
      pascalCase: "TestV_2",
      pathCase: "test/v/2",
      sentenceCase: "Test v 2",
      snakeCase: "test_v_2",
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
      headerCase: "1-Test",
      kebabCase: "1-test",
      noCase: "1 test",
      pascalCase: "1Test",
      pathCase: "1/test",
      sentenceCase: "1 test",
      snakeCase: "1_test",
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
      headerCase: "Foo-12019-Bar",
      kebabCase: "foo-12019-bar",
      noCase: "foo 12019 bar",
      pascalCase: "Foo_12019Bar",
      pathCase: "foo/12019/bar",
      sentenceCase: "Foo 12019 bar",
      snakeCase: "foo_12019_bar",
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
      headerCase: "A-Number-2-In",
      kebabCase: "a-number-2-in",
      noCase: "a number 2 in",
      pascalCase: "ANumber_2In",
      pathCase: "a/number/2/in",
      sentenceCase: "A number 2 in",
      snakeCase: "a_number_2_in",
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
      headerCase: "V1-Test",
      kebabCase: "v1-test",
      noCase: "v1 test",
      pascalCase: "V1Test",
      pathCase: "v1/test",
      sentenceCase: "V1 test",
      snakeCase: "v1_test",
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
      headerCase: "V-1-Test-With-Separate-Numbers",
      kebabCase: "v-1-test-with-separate-numbers",
      noCase: "v 1 test with separate numbers",
      pascalCase: "V_1TestWithSeparateNumbers",
      pathCase: "v/1/test/with/separate/numbers",
      sentenceCase: "V 1 test with separate numbers",
      snakeCase: "v_1_test_with_separate_numbers",
    },
    { separateNumbers: true },
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
      expect(headerCase(input, options)).toEqual(result.headerCase);
      expect(kebabCase(input, options)).toEqual(result.kebabCase);
      expect(noCase(input, options)).toEqual(result.noCase);
      expect(pascalCase(input, options)).toEqual(result.pascalCase);
      expect(pathCase(input, options)).toEqual(result.pathCase);
      expect(sentenceCase(input, options)).toEqual(result.sentenceCase);
      expect(snakeCase(input, options)).toEqual(result.snakeCase);
    });
  }
});
