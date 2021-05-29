import { Options, paramCase } from ".";

const TEST_CASES: [string, string, Options?][] = [
  ["", ""],
  ["test", "test"],
  ["test string", "test-string"],
  ["Test String", "test-string"],
  ["TestV2", "test-v2"],
  ["version 1.2.10", "version-1-2-10"],
  ["version 1.21.0", "version-1-21-0"],
  ["TestV2", "test-v-2", { separateNumbers: true }],
];

describe("param case", () => {
  for (const [input, result, options] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(paramCase(input, options)).toEqual(result);
    });
  }
});
