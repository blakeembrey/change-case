const SMALL_WORDS = /^(?:a|an|and|as|at|but|by|en|for|if|in|neither|nor|of|on|only|or|per|so|than|that|the|to|v\.?|versus|vs\.?|via|when|with|without|yet)$/i;
const WORDS = /[^ :–—-]+|./g;
const WHITESPACE = /\s/;
const IS_CAPITALIZED = /.(?=[A-Z]|\..)/;
const ALPHANUMERIC_PATTERN = /[A-Za-z0-9\u00C0-\u00FF]/;

export function titleCase(input: string) {
  let result = "";
  let m: RegExpExecArray | null;

  // tslint:disable-next-line
  while ((m = WORDS.exec(input)) !== null) {
    const { 0: token, index } = m;

    if (
      // Ignore already capitalized words.
      !IS_CAPITALIZED.test(token) &&
      // Ignore small words except at beginning or end.
      (!SMALL_WORDS.test(token) ||
        index === 0 ||
        index + token.length === input.length) &&
      // Ignore URLs.
      (input.charAt(index + token.length) !== ":" ||
        WHITESPACE.test(input.charAt(index + token.length + 1)))
    ) {
      result += token.replace(ALPHANUMERIC_PATTERN, m => m.toUpperCase());
      continue;
    }

    result += token;
  }

  return result;
}
