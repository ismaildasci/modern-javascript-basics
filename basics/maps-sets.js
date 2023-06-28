'use strict';

// const fruit = new Map();

// fruit.set(1, 'Banana');
// fruit.set(2, 'Apple');
// fruit.set(3, 'Orange');

// document.getElementById('output').innerHTML = fruit.get(1);

// fruit.delete(2);

// // fruit.forEach(item => {
// document.getElementById('output').innerHTML += `<li>${fruit.get(1)}</li>`;
// });

const users = new Map();

users.set({
'name': 'Andre',
'email': 'andre@mail.com'
}, function(user){
document.getElementById('output').innerHTML += `<li>${user.name} (${user.email})</li>`;
});

const userAshley = {
'name': 'Ashley',
'email': 'ashley@mail.com'
};


users.set(userAshley, function(user){
document.getElementById('output').innerHTML += `<li>${user.name} (${user.email})</li>`;
});


users.forEach((value,key) => {
value(key);
});

let userAshleyExists = users.has(userAshley);

console.log('userAshleyExists', userAshleyExists);

const fruit = new Set();

fruit.add('Banana');
fruit.add('Apple');
fruit.add('Orange');

fruit.forEach(value => {
document.getElementById('output').innerHTML += `<li>${value}</li>`;
});
