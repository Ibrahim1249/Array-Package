# Custom Array Methods and Utility Functions

This package provides custom implementations of common array methods and some utility functions for JavaScript.

## Installation

Install the package using npm: install array-utility-package

```bash
npm install array-utility-package
```

## Usage

```bash
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
} = require('array-utility-package');
```

## Custom Array Methods
#These methods are added to the Array prototype and can be used on any array.

 `customMap(callback)`
 - Signature: Array.prototype.customMap = function(callback)

```bash
const numbers = [1, 2, 3, 4];
const doubled = numbers.customMap(x => x * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

 `customFilter(callback)`
 - Signature: Array.prototype.customFilter = function(callback)

```bash
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.customFilter(x => x % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```
`customReduce(callback, initialValue)`
 - Signature: Array.prototype.customReduce = function(callback, initialValue)

 ```bash
 const numbers = [1, 2, 3, 4];
const sum = numbers.customReduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10
```

`customFlat(depth)`
- Signature: Array.prototype.customFlat = function(depth)

```bash
const nestedArray = [1, [2, [3, 4]]];
const flattened = nestedArray.customFlat(2);
console.log(flattened); // Output: [1, 2, 3, 4]
```

`customCall(context, ...args)`
- Signature: Function.prototype.customCall = function(context, ...args)

```bash
function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const person = { name: 'John' };
greet.customCall(person, 'Hello'); // Output: Hello, John!
```

`customApply(context, argsArray)`
- Signature: Function.prototype.customApply = function(context, argsArray)

```bash
function introduce(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Alice' };
introduce.customApply(person, ['Hi', '!']); // Output: Hi, Alice!
```

`customBind(context, ...args)`
- Signature: Function.prototype.customBind = function(context, ...args)

```bash
function multiply(a, b) {
  return a * b;
}

const double = multiply.customBind(null, 2);
console.log(double(4)); // Output: 8
```

`sumArray(array)`
- Signature: function sumArray(array)

```bash
const numbers = [1, 2, 3, 4];
console.log(sumArray(numbers)); // Output: 10
```

`reverseString(str)`
- Signature: function reverseString(str)

```bash
console.log(reverseString("hello")); // Output: "olleh"
```

`randomInRange(min, max)`
- Signature: function randomInRange(min, max)

```bash
console.log(randomInRange(1, 10));
```