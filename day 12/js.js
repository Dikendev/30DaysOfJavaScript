// lvl 1 - 1.
// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

const text =  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const pattern = /\d+/g
const matches = text.match(pattern);
let sum = 0 // result string array
  
var incomeTotal = matches.map(function (x) { 
  return parseInt(x, 10); 
}); // convert to number array

incomeTotal.forEach(num => sum += num);
console.log(sum);

// lvl 1 - 2.
// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
let stringPoints = points.toString()
console.log(stringPoints)

// lvl 1 - 3.
// Write a pattern which identify if a string is a valid JavaScript variable.

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True ok

let patternName1 = /^[A-Z][a-z].{3,12}$/;
let first_name = 'Diego_kennedy';
let resultName1 = patternName1.test(first_name);
console.log(resultName1);

let patternName2 = /^[A-Z][a-z]\D$/;
let first_name2 = 'Diego-kennedy';
let resultName2 = patternName2.test(first_name2);
console.log(resultName2);

let patternName3 = /^[A-Z][a-z]\D$/;
let first_name3 = '1Diego_kennedy';
let resultName3 = patternName3.test(first_name3);
console.log(resultName3);

