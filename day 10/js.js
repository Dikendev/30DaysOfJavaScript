// lvl 1.
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = [
  'Finland',
  'Sweden',
  'Norway',
]

// lvl 1 - 1.
// create an empty set

const set = new Set()
console.log(set)

// lvl 1 - 2.
/// Create a set containing 0 to 10 using loop

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
setOfNumbers = new Set()
for ( const numb of numbers) {
  setOfNumbers.add(numb)
}
console.log(setOfNumbers)

// lvl 1 - 3.
// Remove an element from a set

setOfNumbers.delete(3)
console.log(setOfNumbers)

// lvl 1 - 4.
// Clear a set

setOfNumbers.clear()
console.log(setOfNumbers)

// lvl 1 - 5.
// Create a set of 5 string elements from array

const users = [
  'Diego',
  'Cristina',
  'David',
  'Joy',
]

const newUsers = new Set(users);
console.log(newUsers);

// lvlv 1 - 6.
// Create a map of countries and number of characters of a country

const mapCountries = new Map(countries);
console.log(mapCountries)



