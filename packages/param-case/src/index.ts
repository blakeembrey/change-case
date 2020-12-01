import { dotCase, Options } from "dot-case";

export { Options };

export function paramCase(input: string, options: Options = {}) {
  return dotCase(input, {
    delimiter: "-",
    ...options,
  });
}
