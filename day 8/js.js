// lvl 1 - 1.

const dog = {}
// console.log(dog);

dog.name = 'Joy';
dog.legs = 4;
dog.color = 'White and brown';
dog.age = '6 months';
dog.bark = function() {  
  return('woof woof'); 
}
dog.breed = 'lhasa apso';
dog.getDogInfo = function() {
  return `${this.name}, ${this.age}, ${this.color}, ${this.breed}`;
}
// console.log(dog.getDogInfo());

//lvl 2.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

// lvl 2 - 1.
// Find the person who has many skills in the users object.

// lvl 2 - 2.
// Count logged in users, count users having greater than equal to 50 points from the following object.

const valuesCount = Object.values(users);

const morePoints = valuesCount.filter((users) =>
  users.points >= 50
);
// console.log('Have more points', morePoints);

// lvl 2 - 4.
//Set your name in the users object without modifying the original users object.

const diegoKennedy = Object.assign({}, users)
// console.log(diegoKennedy)

// lvl 2 - 5.
//Get all keys or properties of users object

const allKeysOfUsers = Object.keys(diegoKennedy)
// console.log(allKeysOfUsers)


