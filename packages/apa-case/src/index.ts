const SMALL_WORDS_CAPITALIZED = /\b(s?he|it|we|him|her|you)\b/;
const SMALL_WORDS_NOT_CAPITALIZED = /\b(?:an?d?|a[st]|but|by|en|for|i[fn]|nor|o[fnr]|per|the|to|up|vs?\.?|via|yet)\b/i;
const TOKENS = /[^\s:–—-]+|./g;
const WHITESPACE = /\s/;
const IS_MANUAL_CASE = /.(?=[A-Z]|\..)/;
const ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/;

export function apaTitleCase(input: string) {
  let result = "";
  let m: RegExpExecArray | null;

  // tslint:disable-next-line
  while ((m = TOKENS.exec(input)) !== null) {
    const { 0: token, index } = m;

    if (
      // Ignore already capitalized words.
      !IS_MANUAL_CASE.test(token) &&
      // Ignore small words except at beginning or end.
      (!SMALL_WORDS_NOT_CAPITALIZED.test(token) ||
        SMALL_WORDS_CAPITALIZED.test(token) ||
        index === 0 ||
        index + token.length === input.length) &&
      // Ignore URLs.
      (input.charAt(index + token.length) !== ":" ||
        WHITESPACE.test(input.charAt(index + token.length + 1)))
    ) {
      // Find and uppercase first word character, skips over *modifiers*.
      result += token.replace(ALPHANUMERIC_PATTERN, (m) => m.toUpperCase());
      continue;
    }

    result += token;
  }

  return result;
}
