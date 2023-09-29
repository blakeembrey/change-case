import { split, Options, toLower, toUpper } from "no-case";

export type { Options };

export function sentenceCase(input: string, options?: Options) {
  const lower = toLower(options?.locale);
  const upper = toUpper(options?.locale);
  return split(input)
    .map((word, index) => {
      if (index === 0) return upper(word[0]) + lower(word.slice(1));
      return lower(word);
    })
    .join(" ");
}
