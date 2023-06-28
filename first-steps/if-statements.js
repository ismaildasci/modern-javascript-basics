const age = 22;
const drinkAge = 18;

if (age >= drinkAge) {

console.log('You can drink beer!');
} else {

console.log('You can drink juice!');
}



const passwordTypedIn = 'password';
const actualPassword = 'password';

if(passwordTypedIn === actualPassword) {

console.log('Correct password, loging you in.');
} else {

console.log('Incorrect password, try again.');
}

const month = 'January';
const day = 31;

if(month === 'January' && day === 31) {

console.log('This day exists!');
} else
{

console.log('This day does not exist!');
}

const grade = 10;

if(grade >= 9) {

console.log('Great job!');
}
else if(grade != 6) {

console.log('You passed!');
}
else {

console.log('You failed!');
}

age >= 18 ? console.log('You can drink beer!') : console.log('You can drink juice!');
