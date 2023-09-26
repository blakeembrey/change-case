import { pascalCase, pascalCaseTransformMerge, Options } from ".";

const TEST_CASES: [string, string, Options?][] = [
  ["", ""],
  ["test", "Test"],
  ["test string", "TestString"],
  ["Test String", "TestString"],
  ["TestV2", "TestV2"],
  ["version 1.2.10", "Version_1_2_10"],
  ["version 1.21.0", "Version_1_21_0"],
  ["version 1.21.0", "Version1210", { transform: pascalCaseTransformMerge }],
  ["TestV2", "TestV_2", { separateNumbers: true }],
  ["1test", "1Test", { separateNumbers: true }],
  ["Foo12019Bar", "Foo_12019Bar", { separateNumbers: true }],
  ["aNumber2in", "ANumber_2In", { separateNumbers: true }],
  ["V1Test", "V1Test"],
  ["V1Test with separateNumbers", "V_1TestWithSeparateNumbers", { separateNumbers: true }],
];

describe("pascal case", () => {
  for (const [input, result, options] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(pascalCase(input, options)).toEqual(result);
    });
  }
});
