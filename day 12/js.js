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

