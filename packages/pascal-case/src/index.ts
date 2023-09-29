import { split, toLower, toUpper, Options } from "no-case";

export type { Options };

export function pascalCase(input: string, options?: Options) {
  const lower = toLower(options?.locale);
  const upper = toUpper(options?.locale);
  return split(input, options)
    .map((word, index) => {
      const char0 = word[0];
      const initial =
        index > 0 && char0 >= "0" && char0 <= "9" ? "_" + char0 : upper(char0);
      return initial + lower(word.slice(1));
    })
    .join("");
}
