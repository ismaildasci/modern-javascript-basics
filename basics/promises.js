'use strict';

let myPromise = new Promise((resolve, reject) => {
// call an api
let user = {
name: 'Andre',
email: 'andre@mail.com'
};

setTimeout(() => {
// resolve(user);
reject('Something went wrong');
}, 2000);
});

const getAdditionalUserData = user => {
document.getElementById('output').innerHTML = `${user.name} - ${user.email})`;
return new Promise((resolve, reject) => {
user.fovoriteColor = 'blue';
user.favoriteDrink = 'coffee';

setTimeout (() => {
resolve(user);
}, 2000);
});
}

myPromise.then(getAdditionalUserData)
.then((user) => {
document.getElementById('output').innerHTML = `${user.name} (${user.email}) - ${user.fovoriteColor} - ${user.favoriteDrink})`;
})
.catch((error) => {
document.getElementById('output').innerHTML = error;
});

document.getElementById('output').innerHTML = 'Look ma, no blocking!';
