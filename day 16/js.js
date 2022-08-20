const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Diego',
  lastName:'Kennedy',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
// JavaScript Object Notation 

// lv 1 - 1.
// Change skills array to JSON using JSON.stringify().

const skillToTxt = JSON.stringify(skills, 4);
console.log(skillToTxt);

// lvl 1 - 2.
// Stringify the age variable.

const ageToTxt = JSON.stringify(age, 4);
console.log(ageToTxt);

// lvl 1 - 3.
// Stringify the isMarried variable.

const isMarriedToTxt = JSON.stringify(isMarried, 4);
console.log(isMarriedToTxt);

// lvl 1 - 4.
// Stringify the student object.

const studentToTxt = JSON.stringify(student, 4);
console.log(studentToTxt);

// lvl 2.
// Stringify the students object with only firstName, lastName and skills properties

const studentsPropertiesTxt = JSON.stringify(student,['firstName', 'lastName', 'skills'], 4);
console.log(studentsPropertiesTxt);

// lvl 3 - 1
// Parse the txt JSON to object.

const txtJSON = JSON.parse(txt)
console.log(txtJSON);

