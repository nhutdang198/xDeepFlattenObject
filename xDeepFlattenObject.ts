/**
 * Recursively flattens a deeply nested object by concatenating keys using dots.
 *
 * This function takes a deeply nested object and transforms it into a flat object
 * where keys are concatenated using dots to represent the hierarchy in the original
 * object. It iterates through the input object recursively, combining keys to create
 * new keys for the flat object.
 *
 * @param deepObject - The deeply nested object to flatten.
 * @param prefix - (Optional) The prefix to be used for the flattened keys. This is used
 * to add a prefix to the keys in the flattened object, which can be helpful in avoiding
 * key conflicts or specifying a common namespace.
 * @returns The flattened object with keys representing the hierarchy in the original object.
 *
 * @example
 * const deepObject = {
 *   person: {
 *     name: 'Alice',
 *     address: {
 *       city: 'Wonderland',
 *       postal: '12345',
 *     },
 *   },
 * };
 *
 * const flattenedObject = xDeepFlattenObject(deepObject);
 * // Result:
 * // {
 * //   'person.name': 'Alice',
 * //   'person.address.city': 'Wonderland',
 * //   'person.address.postal': '12345',
 * // }
 *
 * @remarks
 * This function is useful when you have nested data structures and need to convert them
 * into a format that is easier to work with, such as when flattening configuration objects
 * or dealing with deeply nested JSON data.
 */
export function xDeepFlattenObject(deepObject: Record<string, any>, prefix: string = ''): Record<string, any> {
  const flattenedObject: Record<string, any> = {};

  function flattenObject(prefix: string, value: any) {
    if (typeof value === 'object' && value !== null) {
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          const newKey = prefix ? `${prefix}.${key}` : key;
          flattenObject(newKey, value[key]);
        }
      }
    } else {
      flattenedObject[prefix] = value;
    }
  }

  flattenObject(prefix, deepObject);

  return flattenedObject;
}
