'use strict';

let fruit = ['Banana', 'Apple', 'Orange'];

// filter example

let fruitsThatContainE = fruit.filter(f => f.includes('e'));

document.getElementById('output').innerHTML = fruitsThatContainE.join(', ');

// reduce example
let users = [
{
'name': 'Andre',
'email': 'andre@mail.com',
'stars': 5
},
{
'name': 'ashley',
'email': 'ashley@mail.com',
'stars': 3
},
];

let totalStars = users.reduce((stars, user) => stars + user.stars, 0);
document.getElementById('output').innerHTML += `<br> Total stars: ${totalStars}`;

// map example

let usersEmails = users.map(user => user.email);

document.getElementById('output').innerHTML += '<br>Emails: ' + usersEmails.join(', ');
