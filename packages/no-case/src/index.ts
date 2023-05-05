import { lowerCase } from "lower-case";

export interface Options {
  splitRegexp?: RegExp | RegExp[];
  stripRegexp?: RegExp | RegExp[];
  delimiter?: string;
  transform?: (part: string, index: number, parts: string[]) => string;
}

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
const DEFAULT_SPLIT_REGEXP = [
  /([\p{Ll}\d])(\p{Lu})/gu,
  /(\p{Lu})([\p{Lu}][\p{Ll}])/gu,
];

// Remove all non-word characters.
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;

/**
 * Normalize the string into something other libraries can manipulate easier.
 */
export function noCase(input: string, options: Options = {}) {
  const {
    splitRegexp = DEFAULT_SPLIT_REGEXP,
    stripRegexp = DEFAULT_STRIP_REGEXP,
    transform = lowerCase,
    delimiter = " ",
  } = options;

  let result = replace(
    replace(input, splitRegexp, "$1\0$2"),
    stripRegexp,
    "\0"
  );
  let start = 0;
  let end = result.length;

  // Trim the delimiter from around the output string.
  while (result.charAt(start) === "\0") start++;
  while (result.charAt(end - 1) === "\0") end--;

  // Transform each token independently.
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}

/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input: string, re: RegExp | RegExp[], value: string) {
  if (re instanceof RegExp) return input.replace(re, value);
  return re.reduce((input, re) => input.replace(re, value), input);
}
