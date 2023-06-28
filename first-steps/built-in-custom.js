// function declaration / function definition
function sayHello(firstName = 'John', lastName = 'Doe')
{
console.log(`Hello ${firstName} ${lastName}!`);
}

// function call / invoke / executing / run
sayHello('Andre', 'Silva');
sayHello('Dennis', 'Ivanov');
sayHello();

function add(num1, num2)
{
const sum = num1 + num2;
return sum;
}

const result = add(2, 3);
console.log(result);

function sayHelloAgain(firstName = 'John', lastName = 'Doe')
{
return `Hello ${firstName} ${lastName}!`;
}
console.log(sayHelloAgain('Nuno', 'Silva'));

const person = {
firstName: 'Andre',
'last-name': 'Silva',
age: 28,
howOldAmI: function() {
console.log(`I am ${this.age} years old.`);
}
};

person.howOldAmI();
