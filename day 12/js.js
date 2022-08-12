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

let patternPoints = /^[1-9]+[0-9]*$/;
let result = stringPoints.match(patternPoints);
console.log(result);

// console.log(points)


// const sortePoints = points.sort(function (a,b) {return a-b});
// console.log(sortePoints)
// const matchesP = sortePoints.match(patternPoints)
// console.log(matchesP)

// var sortePoints = points.map(function (x) {
//   return parseInt(x, 10);
// });
