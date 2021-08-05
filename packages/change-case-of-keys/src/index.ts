const isAnObject = (object: any) => typeof object === "object" && !!object; // `!object` to catch null, which is a typeof object in js

/**
 * changes the case of each key in the object
 *
 * example:
 * ```ts
 * import { camelCase, changeCaseOfKeys } from 'change-case';
 *
 * const changedObject = changeCaseOfKeys({
 *   first_name: 'bob',
 *   last_name: 'the builder',
 *   credentials: [{ built_things: true }],
 * }, camelCase);
 * /*
 *  {
 *    firstName: 'bob',
 *    lastName: 'the builder',
 *    credentials: [{ builtThings: true }],
 *  }
 * /*
 * ```
 */
export const changeCaseOfKeys = (
  object: any,
  changeCaseFn: (key: string) => string
) => {
  // handle non objects
  if (!isAnObject(object)) return object;

  // recursively loop through each key
  const changedObject: { [index: string]: any } = {}; // set as new object
  Object.keys(object).forEach((key) => {
    // define the new key name
    const changedKey = changeCaseFn(key);

    // recursively run on the value
    const value = object[key];
    const changedValue = (() => {
      if (Array.isArray(value))
        return value.map((valueInArray) =>
          changeCaseOfKeys(valueInArray, changeCaseFn)
        ); // if array, run on each item of array
      return changeCaseOfKeys(value, changeCaseFn);
    })();

    // set the value that had its keys deeply omitted under the key we're allowed to keep
    changedObject[changedKey] = changedValue;
  });

  // return the changed object
  return changedObject;
};
