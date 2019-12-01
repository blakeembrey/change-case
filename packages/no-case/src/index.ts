import { lowerCase } from "lower-case";

export interface Options {
  splitRegexp?: RegExp;
  stripRegexp?: RegExp;
  delimiter?: string;
  transform?: (part: string, index: number, parts: string[]) => string;
}

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
const SPLIT_REGEXP = /([a-z0-9])([A-Z])|([A-Z])([A-Z][a-z])/g;

// Remove all non-word characters.
const STRIP_REGEXP = /[^a-zA-Z0-9]+/g;

/**
 * Normalize the string into something other libraries can manipulate easier.
 */
export function noCase(input: string, options: Options = {}) {
  const {
    splitRegexp = SPLIT_REGEXP,
    stripRegexp = STRIP_REGEXP,
    transform = lowerCase,
    delimiter = " "
  } = options;

  let result = input
    .replace(splitRegexp, (...args) => {
      return args
        .slice(1, -2)
        .filter(x => x !== undefined)
        .join("\0");
    })
    .replace(stripRegexp, "\0");

  let start = 0;
  let end = result.length;

  // Trim the delimiter from around the output string.
  while (result.charAt(start) === "\0") start++;
  while (result.charAt(end - 1) === "\0") end--;

  // Transform each token independently.
  return result
    .slice(start, end)
    .split("\0")
    .map(transform)
    .join(delimiter);
}
