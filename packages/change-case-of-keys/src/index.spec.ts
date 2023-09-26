import { camelCase } from "camel-case";
import { changeKeys } from ".";

const TEST_CASES: [any, any][] = [
  [
    {
      first_name: "bob",
      last_name: "the builder",
      credentials: [{ built_things: true }],
    },
    {
      firstName: "bob",
      lastName: "the builder",
      credentials: [{ builtThings: true }],
    },
  ],
  [
    {
      first_name: "bob",
      price: 8.21,
      favoriteAnimals: ["red", "green", 3, null, 7],
    },
    {
      firstName: "bob",
      price: 8.21,
      favoriteAnimals: ["red", "green", 3, null, 7],
    },
  ],
  [null, null],
];

describe("change keys", () => {
  for (const [input, result] of TEST_CASES) {
    it(`${input} -> ${result}`, () => {
      expect(changeKeys(input, camelCase)).toEqual(result);
    });
  }
});
