import { constantCase } from ".";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "TEST"],
  ["test string", "TEST_STRING"],
  ["Test String", "TEST_STRING"],
  ["dot.case", "DOT_CASE"],
  ["path/case", "PATH_CASE"],
  ["TestV2", "TEST_V2"],
  ["version 1.2.10", "VERSION_1_2_10"],
  ["version 1.21.0", "VERSION_1_21_0"]
];

describe("constant case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(constantCase(input)).toEqual(result);
    });
  }
});
