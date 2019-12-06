import { noCase, Options } from "no-case";

export { Options };

export function pascalCaseTransform(input: string, index: number) {
  const firstChar = input.charAt(0);
  const lowerChars = input.substr(1).toLowerCase();
  if (index > 0 && firstChar >= "0" && firstChar <= "9") {
    return `_${firstChar}${lowerChars}`;
  }
  return `${firstChar.toUpperCase()}${lowerChars}`;
}

export function pascalCaseTransformMerge(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

export function pascalCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: "",
    transform: pascalCaseTransform,
    ...options
  });
}
