import { dotCase, Options } from "dot-case";

export { Options };

export function pathCase(input: string, options: Options = {}) {
  return dotCase(input, {
    delimiter: "/",
    ...options
  });
}
