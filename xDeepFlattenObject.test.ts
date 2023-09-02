// Import the xDeepFlattenObject function
import { xDeepFlattenObject } from './xDeepFlattenObject.ts';

describe('xDeepFlattenObject', () => {
  it('should flatten a shallow object with no nesting', () => {
    const input = { name: 'John', age: 30 };
    const expected = { name: 'John', age: 30 };
    expect(xDeepFlattenObject(input)).toEqual(expected);
  });

  it('should flatten a deeply nested object', () => {
    const input = {
      person: {
        name: 'Alice',
        address: {
          city: 'Wonderland',
          postal: '12345',
        },
      },
    };
    const expected = {
      'person.name': 'Alice',
      'person.address.city': 'Wonderland',
      'person.address.postal': '12345',
    };
    expect(xDeepFlattenObject(input)).toEqual(expected);
  });

  it('should handle arrays within the object', () => {
    const input = {
      fruits: ['apple', 'banana', 'cherry'],
      colors: {
        primary: 'red',
        secondary: 'yellow',
      },
    };
    const expected = {
      'fruits.0': 'apple',
      'fruits.1': 'banana',
      'fruits.2': 'cherry',
      'colors.primary': 'red',
      'colors.secondary': 'yellow',
    };
    expect(xDeepFlattenObject(input)).toEqual(expected);
  });

  it('should handle null and undefined values', () => {
    const input = {
      name: 'John',
      age: null,
      address: undefined,
    };
    const expected = {
      name: 'John',
      age: null,
      address: undefined,
    };
    expect(xDeepFlattenObject(input)).toEqual(expected);
  });

  it('should handle an empty object', () => {
    const input = {};
    const expected = {};
    expect(xDeepFlattenObject(input)).toEqual(expected);
  });
});
