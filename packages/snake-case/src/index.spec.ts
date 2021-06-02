import { snakeCase, Options } from ".";

const TEST_CASES: [string, string, Options?][] = [
  ["", ""],
  ["_id", "id"],
  ["test", "test"],
  ["test string", "test_string"],
  ["Test String", "test_string"],
  ["TestV2", "test_v2"],
  ["version 1.2.10", "version_1_2_10"],
  ["version 1.21.0", "version_1_21_0"],
  ["TestV2", "test_v_2", { separateNumbers: true }],
  ["address line 1", "address_line_1", { separateNumbers: true }],
  ["Test string For 3rd Test", "test_string_for_3_rd_test", { separateNumbers: true }],
  ["1test", "1_test", { separateNumbers: true }],
  ["Foo12019Bar", "foo_12019_bar", { separateNumbers: true }],
  ["aNumber2in", "a_number_2_in", { separateNumbers: true }],
  ["V1Test", "v1_test"],
  ["V1Test with separateNumbers", "v_1_test_with_separate_numbers", { separateNumbers: true }],
];

describe("snake case", () => {
  for (const [input, result, options] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(snakeCase(input, options)).toEqual(result);
    });
  }
});
