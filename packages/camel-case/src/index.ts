import { pascalCase, pascalCaseTransform, Options } from "pascal-case";

export { Options };

export function camelCaseTransform(input: string, index: number) {
  if (index === 0) return input.toLowerCase();
  return pascalCaseTransform(input, index);
}

export function camelCase(input: string, options: Options = {}) {
  return pascalCase(input, {
    transform: camelCaseTransform,
    ...options
  });
}
