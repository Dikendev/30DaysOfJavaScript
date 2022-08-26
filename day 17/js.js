// lvl 1
// Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem('FirstName', 'Diego');
localStorage.setItem('Age', 270);
localStorage.setItem('Country', 'Brazil');
localStorage.setItem('City', 'Santa Catarina');


// lvl 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
  firstName: 'Diego',
  lastName: 'de Souza',
  age: 270,
  skills: ['HTML', 'CSS', 'JS'],
  country: 'Brazil'
}

const studentJSON = JSON.stringify(student, undefined, 4);
localStorage.setItem('student', studentJSON);

console.log(localStorage);