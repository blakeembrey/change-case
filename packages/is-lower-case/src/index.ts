/**
 * Returns a boolean indicating whether the string is lower case.
 */
export function isLowerCase(input: string, locale?: string | string[]) {
  return (
    input.toLocaleLowerCase(locale) === input &&
    input !== input.toLocaleUpperCase(locale)
  );
}
