class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const Person1 = new Person('diego', 'kennedy', 250, 'brazil', 'blumenau')
const Person2 = new Person('cris', 'freitas', 250, 'brazil', 'blumenau')

console.log(Person1.getFullName())
console.log(Person2.getFullName()) 