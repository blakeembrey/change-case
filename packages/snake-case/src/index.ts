import { noCase, Options } from "no-case";

export { Options };

export function snakeCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: "_",
    ...options,
  });
}