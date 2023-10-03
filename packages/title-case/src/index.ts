const SMALL_WORDS =
  /\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i;
const TOKENS = /[^\s:–—-]+|./g;
const WHITESPACE = /\s/;
const IS_MANUAL_CASE = /\p{Ll}(?=[\p{Lu}])|\.\p{L}/u; // iPhone, example.com, U.N., etc.
const ALPHANUMERIC_PATTERN = /[\p{L}\d]/u;

export function titleCase(input: string, locale?: string[] | string) {
  let result = "";
  let m: RegExpExecArray | null;

  // tslint:disable-next-line
  while ((m = TOKENS.exec(input)) !== null) {
    const { 0: token, index } = m;

    if (
      // Ignore already capitalized words.
      !IS_MANUAL_CASE.test(token) &&
      // Ignore small words except at beginning or end.
      (!SMALL_WORDS.test(token) ||
        index === 0 ||
        index + token.length === input.length) &&
      // Ignore URLs.
      (input.charAt(index + token.length) !== ":" ||
        WHITESPACE.test(input.charAt(index + token.length + 1)))
    ) {
      // Find and uppercase first word character, skips over *modifiers*.
      result += token.replace(ALPHANUMERIC_PATTERN, (m) =>
        m.toLocaleUpperCase(locale),
      );
      continue;
    }

    result += token;
  }

  return result;
}
