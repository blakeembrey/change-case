/**
 * Upper case the first character of an input string.
 */
export function upperCaseFirst(input: string, locale?: string[] | string) {
  return input.charAt(0).toLocaleUpperCase(locale) + input.slice(1);
}
