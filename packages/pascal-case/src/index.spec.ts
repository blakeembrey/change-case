import { pascalCase } from ".";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "Test"],
  ["test string", "TestString"],
  ["Test String", "TestString"],
  ["TestV2", "TestV2"],
  ["version 1.2.10", "Version_1_2_10"],
  ["version 1.21.0", "Version_1_21_0"]
];

describe("pascal case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(pascalCase(input)).toEqual(result);
    });
  }
});
