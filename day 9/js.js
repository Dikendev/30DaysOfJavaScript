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

const countriesToUpperCase = countries.map((country) =>
  country.toUpperCase()
);
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

const namesUppercase = names.map((name) =>
  name.toUpperCase()
);
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

// lvl 1 - 12
// Use filter to filter out countries having six character.

const countriesHaveSixLetters = countries.filter((country) =>
  country.length === 6
);
console.log(countriesHaveSixLetters);

 // lvl 1 - 13
 // Use filter to filter out countries containing six letters and more in the country array.

const countriesHaveSixLettersAndMore = countries.filter((country) => 
  country.length >= 6
 );
console.log(countriesHaveSixLettersAndMore);

// lvl 1 - 14
// Use filter to filter out country start with 'E';
const countriesWithE = countries.filter((country) => 
  country.startsWith('E')
);
console.log(countriesWithE);

// lvl 1 - 15
// Use filter to filter out only prices with values.

const productsPriceMoreThanOne = products.filter((price) =>
  price.price >= 1
);
console.log(productsPriceMoreThanOne);

// lvl 1 - 16
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

// lvl 1 - 17
//Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// lvl 1 - 18
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// lvl 1 - 19
// Explain the difference between some and every

// 'Some': Check if some of the elements are similar in one aspect. It returns Boolean, and  'every' check if all elements are similar in a aspect. It return boolean.

