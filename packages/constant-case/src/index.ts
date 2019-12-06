import { noCase, Options } from "no-case";
import { upperCase } from "upper-case";

export { Options };

export function constantCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: "_",
    transform: upperCase,
    ...options
  });
}
