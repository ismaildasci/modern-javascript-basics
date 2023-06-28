let age = 12;

const isOld = age >= 30;
const isCool = false;

console.log(isOld);

// Equality: Strict Equality === vs Loose Equality ==
console.log(4 === '4');
console.log(4 == '4');
console.log(4 != '4');
console.log(4 !== '4');

// Lotical Operators
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false);

console.log(isOld && isCool);

// Cojnvert boolean to a string
console.log(isOld.toString());

// Truthy and Falsy
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(' '));
console.log(Boolean(NaN));
