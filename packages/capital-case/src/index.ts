import { noCase, Options } from "no-case";
import { lowerCase } from "lower-case";
import { upperCaseFirst } from "upper-case-first";

export { Options };

export function capitalCaseTransform(input: string) {
  return upperCaseFirst(lowerCase(input));
}

export function capitalCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: " ",
    transform: capitalCaseTransform,
    ...options
  });
}
