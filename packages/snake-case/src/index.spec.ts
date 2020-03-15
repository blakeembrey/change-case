import { snakeCase } from ".";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["_id", "id"],
  ["test", "test"],
  ["test string", "test_string"],
  ["Test String", "test_string"],
  ["TestV2", "test_v2"],
  ["version 1.2.10", "version_1_2_10"],
  ["version 1.21.0", "version_1_21_0"]
];

describe("snake case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(snakeCase(input)).toEqual(result);
    });
  }
});
