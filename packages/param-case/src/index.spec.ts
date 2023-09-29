import { describe, it, expect } from "vitest";
import { Options, paramCase } from "./index.js";

const TEST_CASES: [string, string, Options?][] = [
  ["", ""],
  ["test", "test"],
  ["test string", "test-string"],
  ["Test String", "test-string"],
  ["TestV2", "test-v2"],
  ["version 1.2.10", "version-1-2-10"],
  ["version 1.21.0", "version-1-21-0"],
  ["TestV2", "test-v-2", { separateNumbers: true }],
  ["1test", "1-test", { separateNumbers: true }],
  ["Foo12019Bar", "foo-12019-bar", { separateNumbers: true }],
  ["aNumber2in", "a-number-2-in", { separateNumbers: true }],
  ["V1Test", "v1-test"],
  [
    "V1Test with separateNumbers",
    "v-1-test-with-separate-numbers",
    { separateNumbers: true },
  ],
];

describe("param case", () => {
  for (const [input, result, options] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(paramCase(input, options)).toEqual(result);
    });
  }
});
