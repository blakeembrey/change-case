import * as changeCase from "./index.js";

const isObject = (object: unknown) =>
  object !== null && typeof object === "object";

function changeKeysFactory(
  changeCase: (input: string, options?: changeCase.Options) => string,
): (object: unknown, depth?: number) => unknown {
  return function changeKeys(
    object: unknown,
    depth = 1,
    options?: changeCase.Options,
  ): unknown {
    if (depth === 0 || !isObject(object)) return object;

    if (Array.isArray(object)) {
      return object.map((item) => changeKeys(item, depth - 1));
    }

    const result: Record<string, unknown> = Object.create(
      Object.getPrototypeOf(object),
    );

    Object.keys(object as object).forEach((key) => {
      const value = (object as Record<string, unknown>)[key];
      const changedKey = changeCase(key, options);
      const changedValue = changeKeys(value, depth - 1);
      result[changedKey] = changedValue;
    });

    return result;
  };
}

export const camelCase = changeKeysFactory(changeCase.camelCase);
export const capitalCase = changeKeysFactory(changeCase.capitalCase);
export const constantCase = changeKeysFactory(changeCase.constantCase);
export const dotCase = changeKeysFactory(changeCase.dotCase);
export const headerCase = changeKeysFactory(changeCase.headerCase);
export const noCase = changeKeysFactory(changeCase.noCase);
export const kebabCase = changeKeysFactory(changeCase.kebabCase);
export const pascalCase = changeKeysFactory(changeCase.pascalCase);
export const pathCase = changeKeysFactory(changeCase.pathCase);
export const sentenceCase = changeKeysFactory(changeCase.sentenceCase);
export const snakeCase = changeKeysFactory(changeCase.snakeCase);
