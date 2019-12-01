/**
 * Returns a boolean indicating whether the string is lower case.
 */
export function isLowerCase(input: string) {
  return input.toLowerCase() === input && input.toUpperCase() !== input;
}
