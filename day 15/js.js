//lvl 1 - 1.
// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.skills = []
  }
  getFullDesc() {
    const fullDesc = this.name + ' ' + this.age
    return fullDesc
  }
}

// lvl 1 - 2.
// Create a Dog and Cat child class from the Animal Class.


const Animal1 = new Animal('Joy', '6 months', 'white', 4);
console.log(Animal1.getFullDesc());
console.log(Animal1);

class DogAndCat extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs)
    this.gender = gender;
  }
  get getSkill() {
    return this.skills
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
}

const s1 = new DogAndCat('Capivara', '1 year', 'brown', 4, 'male');

s1.setSkill = 'Bark';
s1.setSkill = 'fingir de morto';
s1.setSkill = 'fazer bagunça';

console.log(s1);
