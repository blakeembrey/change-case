import { split, toLower, Options } from "no-case";

export type { Options };

export function pathCase(input: string, options?: Options) {
  const lower = toLower(options?.locale);
  return split(input, options).map(lower).join("/");
}
