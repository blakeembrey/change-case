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

class World {
  public greeting: string;

  constructor(greeting: string) {
    this.greeting = greeting;
  }
}

describe("keys", () => {
  it("should not modify class properties", () => {
    const world = new World("Hello");

    world.constructor = Object;
    expect(camelCase(world, 2)).toEqual(world);
  });
});

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
    input: { todays_date: new Date() },
    depth: 2,
    output: { todaysDate: new Date() },
  },
  {
    input: { a_map: new Map() },
    depth: 2,
    output: { aMap: new Map() },
  },
  {
    input: { ["the-regex"]: /a/ },
    depth: 2,
    output: { theRegex: /a/ },
  },
  testIdentical({ TEST: true }, 0),
  testIdentical(null),
  testIdentical(undefined),
  testIdentical(new Date()),
  testIdentical(Object.create(null)),
  testIdentical(new Map()),
  testIdentical(Number.NaN),
  testIdentical(Error),
  testIdentical(Object.create({})),
  testIdentical(""),
  testIdentical(0),
  testIdentical(false),
  testIdentical(() => {}),
  testIdentical(/a/),
  testIdentical(["Hello", "world"]),
  testIdentical({ valueOf: 0 }),
  testIdentical({}),
] as TestCases)(`$input -> $output`, ({ input, output, depth, options }) => {
  it("should output the correct result", () => {
    expect(camelCase(input, depth, options)).toEqual(output);
  });
});

function testIdentical<T>(input: T, depth = 1): TestCase<T, T> {
  return { input, output: input, depth };
}
