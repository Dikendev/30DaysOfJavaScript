localStorage.setItem('age', 200);

localStorage.setItem('firstName', 'Asabeneh');


const skills = ['HTML', 'CSS', 'JS', 'React'];
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem('skills', skillsJSON);
console.log(localStorage);
