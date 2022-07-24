// Exercicios dia 6
// 1.
// Iterate 0 to 10 using for loop, do the same using while and do while loop

function one1(one1){
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
}

function one2(one2){
  let i = 0;
  while (i <= 10){
    console.log(i);
    i++
  }
}

function one3(one3){
  let i = 0;
  do {
    console.log(i);
    i++
  } while (i <= 10)
}

// 2.
// Iterate 10 to 0 using for loop, do the same using while and do while loop

function two1(two1){
  for (let i = 10; i >= 0; i--){
    console.log(i);
  }
}

function two2(two2){
  let i = 10
  while (i >= 0){
    console.log(i);
    i--
  }
}

function two3(two3){
  let i = 10;
  do {
    console.log(i);
    i--
  } while (i >= 0)
}

// 3.
// Iterate 0 to n using for loop

function three(three){
  let n = 10;
  for ( i = 0; i <= n; i++){
   console.log(i);
  }
}

// 4.
// Write a loop that makes the following pattern using console.log():

function four(four){
  for (var i=1; i<=8; i++){
    console.log("* ".repeat(i));
  }
}

// 5.
// Use loop to print the following pattern:

function five(five){
  let i = 0;
  do {
    console.log(`${i} * ${i} = ${i * i}` );
    i++
  } while (i <= 10)
}

// 6.
// Using loop print the following pattern

function six(six){
  let i = 0;
  console.log('i i^2 i^3');
  while (i <= 10){
    console.log(`${i}  ${i**2}  ${i**3}`);
    i++
  } 
}

// 7.
// Use for loop to iterate from 0 to 100 and print only even numbers

function seven(seven){
  for (let i = 0; i <= 100; i++){
    if (i === 0){
      console.log( i + " is even");
    } else if (i % 2 === 0){
      console.log( i + " is even");
    } else {continue}
 }

}

// 8.
// Use for loop to iterate from 0 to 100 and print only odd numbers

function eight(eight){
  for (let i = 0; i <= 100; i++){
    if (i === 0){
      continue;
    } else if (i % 2 === 0){
      continue;
    } else {
      console.log(`${i} is a odd number`)
    }
 }
}

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

function nine(nine){
  for (let i = 0; i <= 100; i++){
    if (isPrime(i))
      console.log(i);
  }
}

// 10.
// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0;
function ten(ten){
  for (let i = 1; i <= 100; i++){
    sum += i;
  }
  console.log('The sum of all numbers is: ', sum);
}

// 11.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

function eleven(eleven){
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

// 12.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

function twelve(twelve){
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

// 13.
// Develop a small script which generate array of 5 random numbers

function thirteen(thirteen){
  let arr = [];
  while (arr.length < 10){
    let i = Math.floor(Math.random() * 100) +1;
    if (arr.indexOf(i) === -1) arr.push(i);
  }
  console.log(arr);
}

// 14.
//Develop a small script which generate array of 5 random numbers and the numbers must be unique

function fourteen(fourteen){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxz0123456789";
  
  for(i = 0; i <5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
//console.log(fourteen());

// 15.
// Develop a small script which generate a six characters random id:

function fifteen(fifteen){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxz0123456789";
    for(i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
//console.log(fifteen());

// Level 2.1
// Develop a small script which generate any number of characters random id:

function lv2One(one){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxz0123456789";
  var arrLgt = Math.floor(Math.random() * 10) +1 ;
  for(i = 0; i <arrLgt; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
//console.log(one());

// 2.2
// Write a script which generates a random hexadecimal number.

function lv2Two(two){
  var random_hex_color = "";
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0,6);
};
//console.log(lv2Two())

// 2.3
// Write a script which generates a random rgb color number.

function lvl2three(three){
  var randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min +1));
  var r = randomBetween(0, 255);
  var g = randomBetween(0, 255);
  var b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
}
//console.log(lvl2three())

//2.4
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


function lvl2Four(four){
  const uppercased = countries.map(countries => countries.toUpperCase()); 
  console.log(uppercased);
}
lvl2Four()


