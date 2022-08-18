//lvl 1 - 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getFullDesc() {
    const fullDesc = this.name + ' ' + this.age
    return fullDesc
  }
}

const Animal1 = new Animal('Joy', '6 months', 'white', 4);
const Animal2 = new Animal('Capivara', '1 year', 'gray', 4);

console.log(Animal1);
console.log(Animal2);
