import { describe, it, expect } from "vitest";
import { camelCase } from "./keys";
import * as changeCase from "./index.js";

type TestCase<Input, Output> = {
  input: Input;
  output: Output;
  depth?: number;
  options?: changeCase.Options | changeCase.PascalCaseOptions;
};

type TestCases = TestCase<unknown, unknown>[];

describe.each([
  {
    input: {
      first_name: "bob",
      last_name: "the builder",
      credentials: [{ built_things: true }],
    },
    depth: Infinity,
    output: {
      firstName: "bob",
      lastName: "the builder",
      credentials: [{ builtThings: true }],
    },
  },
  {
    input: {
      first_name: "bob",
      price: 8.21,
      favoriteAnimals: ["red", "green", 3, null, 7],
    },
    depth: Infinity,
    output: {
      firstName: "bob",
      price: 8.21,
      favoriteAnimals: ["red", "green", 3, null, 7],
    },
  },
  {
    input: {
      TEST_KEY: {
        FOO_BAR: true,
      },
    },
    depth: undefined,
    output: {
      testKey: {
        FOO_BAR: true,
      },
    },
  },
  {
    input: { TEST: true },
    depth: 0,
    output: { TEST: true },
  },
  {
    input: null,
    depth: 1,
    output: null,
  },
  {
    input: {
      outer_property_1_2: "outer",
      an_array: [{ inner_property_3_4: true }],
    },
    depth: Infinity,
    output: {
      outerProperty12: "outer",
      anArray: [{ innerProperty34: true }],
    },
    options: { mergeAmbiguousCharacters: true },
  },
  {
    input: new Date(),
    depth: 1,
    output: new Date(),
  },
] as TestCases)(`$input -> $result`, ({ input, output, depth, options }) => {
  it("should output the correct result", () => {
    expect(camelCase(input, depth, options)).toEqual(output);
  });
});
