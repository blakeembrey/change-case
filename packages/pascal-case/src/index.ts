import { noCase, Options } from "no-case";

export { Options };

export function pascalCaseTransform(str: string, index: number) {
  const firstChar = str.charAt(0);
  const lowerChars = str.substr(1).toLowerCase();
  if (index > 0 && firstChar >= "0" && firstChar <= "9") {
    return `_${firstChar}${lowerChars}`;
  }
  return `${firstChar.toUpperCase()}${lowerChars}`;
}

export function pascalCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: "",
    transform: pascalCaseTransform,
    ...options
  });
}
