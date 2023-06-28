const hello = function sayHello(firstName)
{
console.log(`Hello ${firstName}!`);
}
hello('Andre');

// IIFE - Immediately Invoked Function Expression
(function(firstName){
console.log(`Hello ${firstName}!`);
})();

function helloAgain(firstName)
{
console.log(`Function declaration Hello ${firstName}!`);
}
helloAgain('Andre');

const hello2 = firstName =>
   `Hello ${firstName}!`;

console.log(hello2('Andre'));

const add = (num1, num2) => num1 + num2;
console.log(add(2, 3));

const person = {
firstName: 'Andre',
'last-name': 'Silva',
age: 28,
howOldAmI() {
console.log(`I am ${this.age} years old.`);
}
};
person.howOldAmI();

// callback function

const button = document.querySelector('button');

const greeting = () => console.log(person.age + add(2, 3)) ;

button.addEventListener('click', greeting);
