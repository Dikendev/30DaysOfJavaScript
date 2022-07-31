// lvl 1

const dog = {}
console.log(dog);

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
console.log(dog.getDogInfo());
