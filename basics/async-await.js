'use strict';

async function init() {
  const start = Date.now();
  document.getElementById('output').innerHTML = `0: init()`;

 const userPromise = getUserData();
 const welcomeStringPromise = getWelcomeString();

const user  = await userPromise;
document.getElementById('output').innerHTML += `<br>${Date.now() - start}: ${user.name} (${user.email})`;

const welcomeString = await welcomeStringPromise;

document.getElementById('output').innerHTML += `<br>${Date.now() - start}: ${welcomeString}`;

}

function getUserData() {

  return new Promise((resolve, reject) => {

    let user = {
      name: 'Andre',
      email: 'andre@mail.com'
    };

    setTimeout( () => {
      resolve(user);
    }, 2000);
  });
}

function getWelcomeString() {

  return new Promise((resolve, reject) => {

    setTimeout( () => {
      resolve('Welcome to my website!');
    },2000);
  });
}

init();
