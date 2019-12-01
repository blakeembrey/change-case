import { sentenceCase } from ".";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "Test"],
  ["test string", "Test string"],
  ["Test String", "Test string"],
  ["TestV2", "Test v2"],
  ["version 1.2.10", "Version 1 2 10"],
  ["version 1.21.0", "Version 1 21 0"]
];

describe("sentence case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(sentenceCase(input)).toEqual(result);
    });
  }
});
