import { pathCase } from ".";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "test"],
  ["test string", "test/string"],
  ["Test String", "test/string"],
  ["TestV2", "test/v2"],
  ["version 1.2.10", "version/1/2/10"],
  ["version 1.21.0", "version/1/21/0"]
];

describe("path case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(pathCase(input)).toEqual(result);
    });
  }
});
