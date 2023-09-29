import { describe, it, expect } from "vitest";
import { camelCase, Options } from "./index";

const TEST_CASES: [string, string, Options?][] = [
  ["", ""],
  ["test", "test"],
  ["test string", "testString"],
  ["Test String", "testString"],
  ["TestV2", "testV2"],
  ["_foo_bar_", "fooBar"],
  ["version 1.2.10", "version_1_2_10"],
  ["version 1.21.0", "version_1_21_0"],
  ["TestV2", "testV_2", { separateNumbers: true }],
  ["1test", "1Test", { separateNumbers: true }],
  ["Foo12019Bar", "foo_12019Bar", { separateNumbers: true }],
  ["aNumber2in", "aNumber_2In", { separateNumbers: true }],
  ["V1Test", "v1Test"],
  [
    "V1Test with separateNumbers",
    "v_1TestWithSeparateNumbers",
    { separateNumbers: true },
  ],
];

describe("camel case", () => {
  for (const [input, result, options] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(camelCase(input, options)).toEqual(result);
    });
  }
});
