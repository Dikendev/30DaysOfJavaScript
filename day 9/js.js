

const countries = [
  'Brazil',
  'Argentina',
  'México',
]

const countriesToUpperCase = countries.map((country => country.toUpperCase()));

console.log(countriesToUpperCase);

const countriesFirstThreeLetters = countries.map((country => country.toUpperCase().slice(0,3)));
console.log(countriesFirstThreeLetters)