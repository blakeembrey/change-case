import { isLowerCase } from ".";

const TEST_CASES: [string, boolean][] = [
  ["", false],
  ["test", true],
  ["TEST", false],
  ["Test", false],
  ["123", false],
  ["snake_case", true]
];

describe("is lower case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(isLowerCase(input)).toEqual(result);
    });
  }
});
