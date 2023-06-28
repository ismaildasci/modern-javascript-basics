'use strict';

import { users, currentUser } from './users.js';

import helper from './helper.js';

const userEmails = users.map(user => user.email);
document.getElementById('output').innerHTML = helper(userEmails).join(', ');
