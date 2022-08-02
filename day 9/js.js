// lvl 1.

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

// Explain the difference between forEach, map, filter, and reduce.
/*
forEach: Iterate an array elements, only with arrays, it takes a callback function with elements, index parameter and array itself.
map: Iterate an array elements and modify the array elements, it takes a callback function with elements, index, array parameter and return a new array.
filter: Filter out items wich full fill filtering conditions and return a new array.
reduce: Takes a callback function, takes acumulator, current, and optional initial values as a parameter and returns a single value.
*/

// Define a callback function before you use it in forEach, map, filter or reduce.
