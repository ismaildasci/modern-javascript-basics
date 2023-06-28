// variables

const num1 = 4;
const num2 = 4;
const num3 =  5.3;
const num4 = -5.3;
const myVar = 'A string';
const myVar2 = 'Another string';


/* Basic Math
Print or results
*/
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Float point inaccuracy
console.log(0.1 + 0.2);
console.log(0.1 + 0.2);

// Other operations
console.log(13 % 5);
console.log(4 %2);
console.log(2 ** 3);

// Increment and decrement
let counter = 0;
counter++;
console.log(counter);

// Comparisons
console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);

// NaN
console.log(num1 * 'a string');

// Infinity

console.log(9_000_000 ** 9_000_000);
console.log(Number.NEGATIVE_INFINITY);

// Math Object
console.log(Math.PI);
console.log(Math.E);
console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.round(2.5));
console.log(Math.ceil(6.3));
console.log(Math.floor(6.3));

// Converting
console.log(myVar == myVar2);
console.log(myVar == num1);

// String to number
console.log();(parseInt("2") + 2);

// Number to string
console.log();(2 + '');

// BigInt - Introduced ES2020
let maxInt = (Number.MAX_SAFE_INTEGER);
console.log(maxInt);
maxInt++;
console.log(maxInt);

let bigNumber = 9007199254740991n;
bigNumber *= 4n;
console.log(bigNumber);
