const firstName = 'Andre';
const lastName = 'Silva';

const jobTitle = 'Web Developer';

const fullName = firstName + ' ' + lastName;

const storeName = "Andre's \"Special\" Cookies \\ Treats";

const storeName2 = `Andre's "Special" Cookies \\ Treats`;

const about = 'Name:' + firstName + ' ' + lastName + ', Job:' + jobTitle;

const html = '\n'
+ '<div>\n'
    + 'hi there\n'
    + '</div>\n';

const fullName2 = `${firstName} ${lastName}`;

const about2 = `Name: ${fullName2}, Job: ${jobTitle}`;

const html2 = `
<div>
    Hi there ${fullName2}
</div>
`;

console.log(firstName.length);
console.log(firstName[0]);
console.log(firstName.charAt(1));
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.indexOf('e'));
console.log(firstName.substring(0, 2));
console.log(firstName.includes('Bob'));
