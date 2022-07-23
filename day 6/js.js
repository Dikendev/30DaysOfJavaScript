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
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array0

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

// 13 .
// 

function thirdTeen(thirdTeen){
  var arr = [];
  while(arr. length < 8){
  var r = Math. floor(Math. random() * 100) + 1;
  if(arr. indexOf(r) === -1) arr. push(r);
  console. log(arr);

}