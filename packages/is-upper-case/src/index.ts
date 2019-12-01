/**
 * Returns a boolean indicating whether the string is upper case.
 */
export function isUpperCase(input: string) {
  return input.toUpperCase() === input && input.toLowerCase() !== input;
}
