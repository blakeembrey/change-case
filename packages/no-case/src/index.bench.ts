import { noCase } from "./index.js";
import { describe, bench } from "vitest";

describe("no case", () => {
  bench("standard", () => {
    noCase("testString123");
  });
});
