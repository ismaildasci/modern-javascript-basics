const person = {
  firstName: 'Andre',
  'last-name': 'Silva',
  age: 28,
  isCool: true,
  hobbies: ['music', 'games', 'movies'],
  address: {
    street: '123 Address st.',
    city: 'Toronto',
    country: 'Canada',
  },
  howOldAmI: function() {
    console.log(`I am ${this.age} years old.`);
  }
};

console.log(person.firstName);
console.log(person['last-name']);

person.hairColor = 'black';

delete person.isCool;

person.howOldAmI();

const groupOfPeople = [
  {
    firstName: 'Dennis',
    age: 30,

  },
  {
    firstName: 'Andre',
    age: 18,
  },
  {
    firstName: 'John',
    age: 25,
  }
];

console.log(groupOfPeople[0].firstName);
console.log(groupOfPeople);
