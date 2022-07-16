

/*const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []

for(let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toLowerCase())
 
} 

console.log(newArr)

const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0

for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)
}
console.log(newArr)

*/
 
const numbers = [1, 2, 3, 4, 5]

let sum = 0
for (const num of numbers) {
  sum = sum + num
}

console.log(sum)