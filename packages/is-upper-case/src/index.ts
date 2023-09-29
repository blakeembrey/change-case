/**
 * Returns a boolean indicating whether the string is upper case.
 */
export function isUpperCase(input: string, locale?: string[] | string) {
  return (
    input.toLocaleUpperCase(locale) === input &&
    input !== input.toLocaleLowerCase(locale)
  );
}
