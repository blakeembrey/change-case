import { camelCase } from ".";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "test"],
  ["test string", "testString"],
  ["Test String", "testString"],
  ["TestV2", "testV2"],
  ["version 1.2.10", "version_1_2_10"],
  ["version 1.21.0", "version_1_21_0"]
];

describe("camel case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(camelCase(input)).toEqual(result);
    });
  }
});
