import { lowerCaseFirst } from ".";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "test"],
  ["TEST", "tEST"]
];

describe("lower case first", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(lowerCaseFirst(input)).toEqual(result);
    });
  }
});
