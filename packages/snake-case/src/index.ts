import { dotCase, Options } from "dot-case";

export { Options };

export function snakeCase(input: string, options: Options = {}) {
  return dotCase(input, {
    delimiter: "_",
    ...options,
  });
}
