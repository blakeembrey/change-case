import { split, toLower, toUpper, Options } from "no-case";

export type { Options };

export function headerCase(input: string, options?: Options) {
  const lower = toLower(options?.locale);
  const upper = toUpper(options?.locale);
  return split(input, options)
    .map((x) => `${upper(x[0])}${lower(x.slice(1))}`)
    .join("-");
}
