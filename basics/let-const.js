'use strict';

var name = 'John Doe';

const username = {
name: 'Andrew',
email: 'andrew@mail.com'
};

username.name = 'John';
username.email = 'john@mail.com';

function init() {
if (true) {
document.getElementById('output').innerHTML = `${username.name} ${username.email}`;
}

}

init();
