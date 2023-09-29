import { split, toUpper, Options } from "no-case";

export type { Options };

export function constantCase(input: string, options?: Options) {
  const upper = toUpper(options?.locale);

  return split(input, options).map(upper).join("_");
}
