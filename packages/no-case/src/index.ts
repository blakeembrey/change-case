export interface Options extends SplitOptions {
  locale?: Locale;
}

/**
 * Convert any string into a lower case string with spaces between words.
 */
export function noCase(input: string, options?: Options) {
  return split(input, options)
    .map(toLower(options?.locale))
    .join(" ");
}

// Regexps involved with splitting words in various case formats.
const SPLIT_LOWER_UPPER_RE = /([\p{Ll}\d])(\p{Lu})/gu;
const SPLIT_UPPER_UPPER_RE = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu;
const SPLIT_NUMBER_LOWER_RE = /(\d)(\p{Ll})/gu;
const SPLIT_LETTER_NUMBER_RE = /(\p{L})(\d)/gu;

// Regexp involved with stripping non-word characters from the result.
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;

// The replacement value for splits.
const SPLIT_REPLACE_VALUE = "$1\0$2";

export interface SplitOptions {
  separateNumbers?: boolean;
}

/**
 * Split any cased input strings into an array of words.
 */
export function split(input: string, options: SplitOptions = {}) {
  let result = input
    .replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE)
    .replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);

  if (options.separateNumbers) {
    result = result
      .replace(SPLIT_NUMBER_LOWER_RE, SPLIT_REPLACE_VALUE)
      .replace(SPLIT_LETTER_NUMBER_RE, SPLIT_REPLACE_VALUE);
  }

  result = result.replace(DEFAULT_STRIP_REGEXP, "\0");

  let start = 0;
  let end = result.length;

  // Trim the delimiter from around the output string.
  while (result.charAt(start) === "\0") start++;
  if (start === end) return [];
  while (result.charAt(end - 1) === "\0") end--;

  // Transform each token independently.
  return result.slice(start, end).split(/\0/g);
}

export type Locale = string[] | string | false | undefined;

export function toLower(locale: Locale): (input: string) => string {
  return locale === false
    ? (input: string) => input.toLowerCase()
    : (input: string) => input.toLocaleLowerCase(locale);
}

export function toUpper(locale: Locale): (input: string) => string {
  return locale === false
    ? (input: string) => input.toUpperCase()
    : (input: string) => input.toLocaleUpperCase(locale);
}
