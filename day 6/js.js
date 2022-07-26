// Exercicios dia 6
// 1.
// Iterate 0 to 10 using for loop, do the same using while and do while loop

function one1() {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
}
// one1();

function one2() {
  let i = 0;
  while (i <= 10){
    console.log(i);
    i++;
  }
}
// one2();

function one3() {
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
}
// one3();

// 2.
// Iterate 10 to 0 using for loop, do the same using while and do while loop

function two1() {
  for (let i = 10; i >= 0; i--){
    console.log(i);
  }
}
// two1();

function two2() {
  let i = 10;
  while (i >= 0){
    console.log(i);
    i--;
  }
}
// two2();

function two3() {
  let i = 10;
  do {
    console.log(i);
    i--
  } while (i >= 0);
}
// two3();

// 3.
// Iterate 0 to n using for loop

function three() {
  let n = 10;
  for (i = 0; i <= n; i++){
   console.log(i);
  }
}
// three();

// 4.
// Write a loop that makes the following pattern using console.log():

function four() {
  for (i=1; i<=8; i++){
    console.log("* ".repeat(i));
  }
}
// four();

// 5.
// Use loop to print the following pattern:

function five() {
  let i = 0;
  do {
    console.log(`${i} * ${i} = ${i * i}`);
    i++;
  } while (i <= 10);
}
// five();

// 6.
// Using loop print the following pattern

function six() {
  let i = 0;
  console.log('i i^2 i^3');
  while (i <= 10){
    console.log(`${i}  ${i**2}  ${i**3}`);
    i++;
  } 
}
// six();

// 7.
// Use for loop to iterate from 0 to 100 and print only even numbers

function seven() {
  for (i = 0; i <= 100; i++){
    if (i === 0){
      console.log( i + " is even");
    } else if (i % 2 === 0){
      console.log( i + " is even");
    } else {continue};
  }
}
// seven();

// 8.
// Use for loop to iterate from 0 to 100 and print only odd numbers

function eight() {
  for (let i = 0; i <= 100; i++){
    if (i === 0){
      continue;
    } else if (i % 2 === 0){
      continue;
    } else {
      console.log(`${i} is a odd number`);
    }
  }
}
// eight()

// 9.
// Use for loop to iterate from 0 to 100 and print only prime numbers

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++){
    if(num%i==0)
      return false;
  }
  return true;
}

function nine(nine) {
  for (let i = 0; i <= 100; i++){
    if (isPrime(i))
      console.log(i);
  }
}
// nine();

// 10.
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.


function ten() {
  let sum = 0;
  for (let i = 1; i <= 100; i++){
    sum += i;
  }
  console.log('The sum of all numbers is: ', sum);
}
// ten();

// 11.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

function eleven() {
  let sumE = 0;
  let sumO = 0;
  for (let i = 0; i <= 100; i++){
    if (i === 0){
      sumE += i;
    } else if (i % 2 === 0){
      sumE += i;
    } else {
      sumO += i;
    }
  }
  console.log('The sum of all even numbers is: ', sumE);
  console.log('The sum of all odd numbers is: ', sumO);
}
// eleven();

// 12.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

function twelve() {
  let sumE = [0].push();
  let sumO = [0].push();
  for (let i = 0; i <= 100; i++){
    if (i === 0){
      sumE += i;
    } else if (i % 2 === 0){
      sumE += i;
    } else {
      sumO += i;
    }
  }
  console.log('The sum of all even numbers is: ', sumE);
  console.log('The sum of all even numbers is: ', sumO);
}
// twelve();

// 13.
// Develop a small script which generate array of 5 random numbers

function thirteen() {
  let arr = [];
  while (arr.length < 5){
    let i = Math.floor(Math.random() * 100) +1;
    if (arr.indexOf(i) === -1) arr.push(i);
  }
  console.log(arr);
}
// thirteen();

// 14.
//Develop a small script which generate array of 5 random numbers and the numbers must be unique

function fourteen() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxz0123456789";
  for(i = 0; i <5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
// console.log(fourteen());

// 15.
// Develop a small script which generate a six characters random id:

function fifteen() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxz0123456789";
    for(i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
// console.log(fifteen());

// Level 2.1
// Develop a small script which generate any number of characters random id:

function lv2One() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxz0123456789";
  var arrLgt = Math.floor(Math.random() * 10) +1 ;
  for(i = 0; i <arrLgt; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
// console.log(lv2One());

// 2.2
// Write a script which generates a random hexadecimal number.

function lv2Two() {
  var random_hex_color = "";
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0,6);
}
//console.log(lv2Two());

// 2.3
// Write a script which generates a random rgb color number.

function lvl2three() {
  var randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min +1));
  var r = randomBetween(0, 255);
  var g = randomBetween(0, 255);
  var b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
};
// console.log(lvl2three());

// 2.4
// Using the above countries array, create the following new array.

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

function lvl2Four() {
  const uppercased = countries.map(countries => countries.toUpperCase()); 
  console.log(uppercased);
  
};
// lvl2Four();

// 2.5
// Using the above countries array, create an array for countries length'.

function lvl2Five() {
  const lengthWordCounter = countries.map(function(word){
    return word.length;   
  });
  console.log(lengthWordCounter);
};
// lvl2Five();

// 2.6
// Use the countries array to create the following array of arrays:
// working

function lvl2Six(six) {
  loopcountries = [];
  const loops = countries.length;
  for( i = 0; i < loops; i++) {
    countries.map;
    i++;
    return; 
  };
};
// lvl2Six()

// loop pra rodar esse script em cada item do array.
//{
  // pra pegar 1 item do array _  mostrar o 0 - 2 caractere _ mostar a quantidade length

//}
