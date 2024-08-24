# Custom Array Methods and Utility Functions

This package provides custom implementations of common array methods and some utility functions for JavaScript.

## Installation

Install the package using npm:

```bash
npm install your-package-name

const {
  customMap,
  customFilter,
  customReduce,
  customCall,
  customApply,
  customBind,
  customFlat,
  sumArray,
  reverseString,
  randomInRange
} = require('your-package-name');

#Custom Array Methods
#These methods are added to the Array prototype and can be used on any array.

#`customMap(callback)`
#Signature: Array.prototype.customMap = function(callback)

const numbers = [1, 2, 3, 4];
const doubled = numbers.customMap(x => x * 2);
console.log(doubled); // Output: [2, 4, 6, 8]


`customFilter(callback)`
Signature: Array.prototype.customFilter = function(callback)

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.customFilter(x => x % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]