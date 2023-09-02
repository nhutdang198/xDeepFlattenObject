**xDeepFlattenObject** This function takes a deeply nested object and transforms it into a flat object where keys are concatenated using dots to represent the hierarchy in the original object. It iterates through the input object recursively, combining keys to create
new keys for the flat object.

## Installation

To use xDeepFlattenObject, you'll need to include the provided TypeScript file in your project.

1. Download the `xDeepFlattenObject.ts` file from this repository.
2. Add the file to your project directory.

## Usage

1. Import the `xDeepFlattenObject` class into your TypeScript code:

   ```typescript
   import { xDeepFlattenObject } from 'x-deep-flatten-object'

    const deepObject = {
      person: {
        name: 'Alice',
        address: {
          city: 'Wonderland',
          postal: '12345',
        },
      },
    };
   
    const flattenedObject = xDeepFlattenObject(deepObject);
    // Result:
    // {
    //   'person.name': 'Alice',
    //   'person.address.city': 'Wonderland',
    //   'person.address.postal': '12345',
    // }

2. Import the `xDeepFlattenObject` class into your Javascript code:

   ```javascript
   const { xDeepFlattenObject } = require("x-deep-flatten-object")

   const deepObject = {
      person: {
        name: 'Alice',
        address: {
          city: 'Wonderland',
          postal: '12345',
        },
      },
    };
   
   const flattenedObject = xDeepFlattenObject(deepObject);
   // Result:
   // {
   //   'person.name': 'Alice',
   //   'person.address.city': 'Wonderland',
   //   'person.address.postal': '12345',
   // }

## Support Me

If you find this project helpful or want to show your appreciation, you can support me by [buying me a coffee](https://www.buymeacoffee.com/nhutdm). Your support is greatly appreciated!
