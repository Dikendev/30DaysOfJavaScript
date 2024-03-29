// lvl 1.

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTML', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTML', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTML', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTML', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTML', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTML', 'CSS', 'JS'],
  age:20
}
];

// lvl 1 - 1.
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const destructureConst = [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// lvl 1 - 2.
// Destructure and assign the elements of countries array to fin, est, sw, den, nor

const destructureElements = [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// lvl 1 - 3.
// Destructure the rectangle object by its properties or keys.

let { width: w, height: h, area: a, perimeter: p } = rectangle
console.log(w, h, a, p) //30 10 200 80

// lvl 2 - 1.
// Iterate through the users array and get all the keys of the object using destructuring

for (const {name, scores, skills, age} of users) {
  console.log(`User: ${name} , score: ${scores}, skills: ${skills} and ${age} years old`)
};

// lvl 2 - 2.
// Find the persons who have less than two skills
