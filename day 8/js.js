// lvl 1

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

//lvl 2

const users = [{ name: 'Alex', email: 'alex@alex.com', skills: ['HTML', 'CSS', 'JavaScript'], age: 20, isLoggedIn: false, points: 30 }, { name: 'Asab', email: 'asab@asab.com', skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'], age: 25, isLoggedIn: false, points: 50 }, { name: 'Brook', email: 'daniel@daniel.com', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'], age: 30, isLoggedIn: true, points: 50 }, { name: 'Daniel', email: 'daniel@alex.com', skills: ['HTML', 'CSS', 'JavaScript', 'Python'], age: 20, isLoggedIn: false, points: 40 },];

// an array is definitely a more appropriate choice for data of this type, and also simplifies retrieving your desired result.

const [result] = users.sort((a, b) => b.skills.length - a.skills.length);
console.log(result);

users.sort(function (a, b) {
  return a.points.localeCompare(b.points);
});

// console.log(users);