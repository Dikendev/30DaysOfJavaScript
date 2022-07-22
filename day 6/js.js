// Exercicios dia 6
// 1.
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
function three(three){
  let n = 10;
  for ( i = 0; i <= n; i++){
   console.log(i);
  }
}


// 4.
function four(four){
  for (var i=1; i<=8; i++){
    console.log("* ".repeat(i));
  }
}

// 5.
function five(five){
  let i = 0;
  do {
    console.log(`${i} * ${i} = ${i * i}` );
    i++
  } while (i <= 10)
}

// 6.
function six(six){
  let i = 0;
  console.log('i i^2 i^3');
  while (i <= 10){
    console.log(`${i}  ${i**2}  ${i**3}`);
    i++
  } 
}

// 7.
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
let sum = 0
function ten(ten){
  for (let i = 1; i <= 100; i++){
    sum += i;
    
  }
  console.log('The sum of all numbers is: ', sum);
}
ten()
