const countries = ['Finland', 'Sweden', 'Denmark', 'NorWay', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
// lv1 1 - 1.
// Explain the difference between forEach, map, filter, and reduce.

/*
forEach: Iterate an array elements, only with arrays, it takes a callback function with elements, index parameter and array itself.
map: Iterate an array elements and modify the array elements, it takes a callback function with elements, index, array parameter and return a new array.
filter: Filter out items wich full fill filtering conditions and return a new array.
reduce: Takes a callback function, takes acumulator, current, and optional initial values as a parameter and returns a single value.
*/

// lvl 1 - 2.
// Define a callback function before you use it in forEach, map, filter or reduce.

// lvl 1 - 3.
// Use forEach to console.log each country in the countries array.

countries.forEach((element) => console.log(element));

// lvl 1 - 4.
// Use forEach to console.log each name in the names array.

names.forEach(function(nameList) {
  console.log(nameList);
});

// lvl 1 - 5.
// Use forEach to console.log each number in the numbers array.

numbers.forEach(function(numberList) {
  console.log(numberList);
});

// lvl 1 - 6.
// Use map to create a new array by changing each country to uppercase in the countries array.

const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

// lvl 1 - 7
// Use map to create an array of countries length from countries array.

const countryList = countries.map((countries) => countries);
console.log(countryList);

// lvl 1 - 8
// Use map to create a new array by changing each number to square in the numbers array

const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare); // nao modifica a array original.

// lvl 1 - 9
// Use map to change to each name to uppercase in the names array

const namesUppercase = names.map((name) => name.toUpperCase());
console.log(namesUppercase);

// lvl 1 - 10
// Use map to map the products array to its corresponding prices.

const mapProducts = products.map((pdt) => pdt);
console.log(mapProducts);

// lvl 1 - 11
// Use filter to filter out countries containing land.

const countriesContainingLand = countries.filter((country) => 
  country.includes('land')
);
console.log(countriesContainingLand);