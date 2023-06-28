'use strict';

const init = () => {
document.getElementById('output').innerHTML = 'Hello World!';
};

function nameString(firstName, lastName) {
return `${firstName} ${lastName}`;
}

let users = [
{
name: 'John',
lastName: 'Doe',
},
{
name: 'Dennis',
lastName: 'Ivanov',
},
];

let names = [];

// users.forEach(function(user) {
// console.log(nameString(user.firstName, user.lastName));
// names.push(user.name);
// });

users.forEach(user => names.push(user.name));

document.getElementById('output').innerHTML = names.join(', ');

document.getElementById('btn').addEventListener('click', (e) =>
{
const getDetails = () => {
return `The button id is ${e.currentTarget.getAttribute('id')}`;
}
document.getElementById('output').innerHTML = getDetails();
});
