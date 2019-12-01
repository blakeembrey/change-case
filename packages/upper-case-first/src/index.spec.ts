import { upperCaseFirst } from ".";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "Test"],
  ["TEST", "TEST"]
];

describe("upper case first", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(upperCaseFirst(input)).toEqual(result);
    });
  }
});
