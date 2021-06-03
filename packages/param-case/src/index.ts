import { noCase, Options } from "no-case";

export { Options };

export function paramCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: "-",
    ...options,
  });
}
