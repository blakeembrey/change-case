/**
 * Upper case the first character of an input string.
 */
export function upperCaseFirst(input: string) {
  return input.charAt(0).toUpperCase() + input.substr(1);
}
