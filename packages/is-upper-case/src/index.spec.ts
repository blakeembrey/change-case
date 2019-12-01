import { isUpperCase } from ".";

const TEST_CASES: [string, boolean][] = [
  ["", false],
  ["test", false],
  ["TEST", true],
  ["Test", false],
  ["123", false],
  ["CONSTANT_CASE", true]
];

describe("is upper case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(isUpperCase(input)).toEqual(result);
    });
  }
});
