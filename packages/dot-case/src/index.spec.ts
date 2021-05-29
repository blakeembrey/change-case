import { dotCase, Options } from ".";

const TEST_CASES: [string, string, Options?][] = [
  ["", ""],
  ["test", "test"],
  ["test string", "test.string"],
  ["Test String", "test.string"],
  ["dot.case", "dot.case"],
  ["path/case", "path.case"],
  ["TestV2", "test.v2"],
  ["version 1.2.10", "version.1.2.10"],
  ["version 1.21.0", "version.1.21.0"],
  ["TestV2", "test.v.2", { separateNumbers: true }],
];

describe("dot case", () => {
  for (const [input, result, options] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(dotCase(input, options)).toEqual(result);
    });
  }
});
