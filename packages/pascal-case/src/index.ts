import { noCase, Options } from "no-case";

export { Options };

export function pascalCaseTransform (x: string, i: number) {
  const firstChar = x.charAt(0);
  const lowerChars = x.substr(1).toLowerCase();
  if (i > 0 && firstChar >= "0" && firstChar <= "9") {
    return `_${firstChar}${lowerChars}`;
  }
  return `${firstChar.toUpperCase()}${lowerChars}`;
};

export function pascalCase(input: string, options: Options = {}) {
  return noCase(input, {
    delimiter: "",
    transform: pascalCaseTransform,
    ...options
  });
}
