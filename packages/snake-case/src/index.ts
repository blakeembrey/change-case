import { dotCase, Options as DotCaseOptions } from "dot-case";

type Options = DotCaseOptions & {
  separateNumbers?: boolean;
};

export { Options };

function snakeCaseTransform(input: string, options: DotCaseOptions = {}) {
  return dotCase(input, {
    delimiter: "_",
    ...options,
  });
}

function snakeCaseTransformSplitNumbers(input: string, options: DotCaseOptions = {}) {
  return dotCase(input, {
    delimiter: "_",
    splitRegexp: [
      /([a-z0-9])([A-Z])/g,
      /([A-Z])([A-Z][a-z])/g,
      /([(0-9)])([A-Za-z])/g,
      /([A-Za-z])([0-9])/g,
    ],
    ...options,
  })
}

export function snakeCase(input: string, options: Options = {}) {
  const { separateNumbers, ...rest } = options;
  if (separateNumbers) {
    return snakeCaseTransformSplitNumbers(input, rest);
  }
  return snakeCaseTransform(input, options);
}
