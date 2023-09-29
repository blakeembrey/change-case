import { describe, it, expect } from "vitest";
import { lowerCase, localeLowerCase } from "./index.js";

const TEST_CASES: [string, string][] = [
  ["", ""],
  ["test", "test"],
  ["TEST", "test"],
  ["test string", "test string"],
  ["TEST STRING", "test string"],
];

const LOCALE_TEST_CASES: [string, string, string][] = [
  ["STRING", "strıng", "tr"],
];

describe("lower case", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(lowerCase(input)).toEqual(result);
    });
  }
});

describe("locale lower case", () => {
  for (const [input, result, locale] of LOCALE_TEST_CASES) {
    it(`${locale}: ${input} -> ${result}`, () => {
      expect(localeLowerCase(input, locale)).toEqual(result);
    });
  }
});
