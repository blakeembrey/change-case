import { pascalCase, pascalCaseTransformMerge, Options } from ".";

const TEST_CASES: [string, string, Options?][] = [
  ["", ""],
  ["test", "Test"],
  ["test string", "TestString"],
  ["Test String", "TestString"],
  ["TestV2", "TestV2"],
  ["version 1.2.10", "Version_1_2_10"],
  ["version 1.21.0", "Version_1_21_0"],
  ["version 1.21.0", "Version1210", { transform: pascalCaseTransformMerge }]
];

describe("pascal case", () => {
  for (const [input, result, options] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(pascalCase(input, options)).toEqual(result);
    });
  }
});
