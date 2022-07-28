//scope.js
a = "JavaScript";
b = 10;
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
} 
// console.log(a, b); // accessible

const rectangle = {
  length: 20,
  width: 20
}

//console.log(rectangle);

const person = {
  fN: 'Diego',
  lN: 'Barros',
  age: 250,
  country: 'Brazil',
  City: 'Blumenau',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'MongoDB'
  ],
  getFullName: function() {
    return `${this.fN} ${this.lN}`
  },  
}

person.nationality = "Brazilian";
person.country = 'Brabrazil';
person.title = "Student";
person.skills.push('Meteor');
person.skills.push('SasS');
person.isMarried = true;

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills;
  .splice(0, this.skills.length - 1);
  .join(", ");
  let lastSkill = this.skills.splice(this. skills.)}
}





console.log(person);



