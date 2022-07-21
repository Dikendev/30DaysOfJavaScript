// Exercicios dia 6
// 1.
function one1 (one1){
  for(let i = 0; i <= 10; i++){
    console.log(i);
  }
}

function one2 (one2){
  let i = 0;
  while (i <= 10){
    console.log(i);
    i++
  }
}

function one3 (one3){
  let i = 0;
  do {
    console.log(i);
    i++
  } while (i <= 10)
}

// 2.
function two1 (two1){
  for(let i = 10; i >= 0; i--){
    console.log(i);
  }
}

function two2 (two2){
  let i = 10
  while ( i >= 0 ){
    console.log(i);
    i--
  }
}

function two3 (two3){
  let i = 10;
  do {
    console.log(i);
    i--
  } while (i >= 0)
}

// 3.
function three(three){
  let n = 10;
  for( i = 0; i <= n; i++){
   console.log(i);
  }
}


// 4.
function four(four){
  for(var i=1; i<=8; i++){
    console.log("* ".repeat(i));
  }
}

// 5.
function five(five){
  let i = 0;
  do{
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
six()