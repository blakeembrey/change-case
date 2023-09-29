import { split, Options, toLower } from "no-case";

export type { Options };

export function snakeCase(input: string, options?: Options) {
  const lower = toLower(options?.locale);
  return split(input, options).map(lower).join("_");
}
