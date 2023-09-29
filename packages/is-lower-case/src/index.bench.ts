import { describe, bench } from "vitest";
import { isLowerCase } from "./index.js";

describe("is lower case", () => {
  bench("test", () => {
    isLowerCase("test");
    isLowerCase("TEST");
    isLowerCase("Test");
  });
});
