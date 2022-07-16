const itCompanies = [
  'Facebook',
  'Google',
  'M  ft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]

let index = itCompanies.indexOf('ifood')

if (index === -1) {
  console.log('This companies does not exist in the array ')
} else {
  console.log('This companies does exist in the array')
}

//const num = Math.floor(Math.random () * 100) // creates random number between 0 and 10
//console.log(num)

//function getRandomInt(min, max) {
//min = Math.ceil(min);
//max = Math.floor(max);
//return Math.floor(Math.random() * (max - min + 1)) + min;}
//getRandomInt(100,50);
//let count = 0 ;
//console.log(++count);
//console.log(count);

//prompt('required text', 'optional text')
//let number = prompt('Enter number', 'number goes here')
//console.log(number)

//const now = new Date()
//console.log(now)

//const now = new Date()
//console.log(now.getMonth())

//const now = new Date() 
//console.log(now.getTime())


//let num = 3;
//if (num > 0){
  //console.log(`${num} is a positive number`);
//}

//let isRaining = true
//if (isRaining) {
  //console.log('Remenber to take your rain coat.')
//} else {
 // console.log('fuck y')
//}

//let num = 0; 
//if (num > 0) {
//  console.log(`${num} is a positive number`);
//} else {
//  console.log(`${num} is a negative number`);
//}

//let isRaining = true;
//if (isRaining) {
 // console.log('you need a rain coat');
//} else {
//  console.log('No need for a rain coat.');
//}

//isRaining = false
// if (isRaining) {
//    console.log('You need a rain coat.')
//  } else {
//    console.log('No need for a rain coat.');
//  }
// sintax of condicional
// if(condition) {code} else {code}

// if() {
//  code
// } else if() {
//  code
// } else {
//  code
// }

//if(condition) {
//  code
//} else if (condition) {
//  code 
//} else {
//  code 
//}

/*let a = 0
if (a > 0) {
  console.log(`${a} is positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else {
  console.log(`${a} is not a number`)
} */

/*let weather2 = 'sunny';
if (weather === 'rainy') {
  console.log('You need a rain coat') ;
} else if(weather === 'cloudy') {
  console.log('it might be cold, you need a jacket.');
} else if(weater === 'sunny') {
  console.log('go out freely.');
} else {
  console.log('No need for rain coat.');
} */

/*let weather = 'cloudy';
  switch (weather) {
    case 'rainy':
      console.log('You need a rain coat.');
      break;
    case 'cloudy':
      console.log('It might be cold, you need a jacket.');
      break;
    case 'sunny':
      console.log('Go out freely.')
      break;
    default:
      console.log("No need for rain coat.")
  }
*/
    
/*let dayUserInput = prompt('What day is today?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday');
    break
  case 'tuesday': 
    console.log('Today is Tuesday');
    break
  case 'wednesday':
    console.log('Today is Wednesday');
    break
  case 'thursday':
    console.log('Today is Thursday');
    break
  case 'friday':
    console.log('Today is Friday');
    break
  case 'saturday':
    console.log('Today is Saturday');
    break
  case 'sunday':
    console.log('Today is Sunday');
    break
  default:
    console.log('It is not a week day')
}
*/

/*let num = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is positive');
  break;
  case num == 0:
    console.log('Number is Zero');  
  break;
  case num < 0:
    console.log('Number is negative');
  break;
  default:
    console.log('Entered value was not a number');
}
*/

/*let userAge = prompt('Enter your age:');

if (userAge >= 18) {
  console.log(`${userAge} pode dirigir`)
} else {
  let yearsLeft = (userAge - 18) * -1 ;  
  console.log(`${userAge} nao pode dirigir, falta ${yearsLeft}`  );
}
*/

/*
let myAge = prompt('Qual minha idade?');
let yourAge = prompt('Qual sua idade?');
let difAge =(myAge - yourAge); // diferença
let difAgepos = Math.abs(difAge);

  if (myAge > yourAge) {
    alert(`Sou mais velho ${difAgepos} anos.`);
  } else {
    alert(`Você é mais velho que eu ${difAgepos} anos.`);
  }
  */
 

  /*
let a = 3
let b = 4

a > b
? console.log(`${a} é maior que ${b}`)
: console.log(`${a} é menor que ${b}`)

const number = prompt('Enter a number: ');

if(number % 2 == 0) {
  alert('The number is par');
}
else {
  alert('The number is impar');
}
*/


// 80-110 A
// 70-89 B
// 60-69 C
// 50-59 D
// 0-49 F


/* let nota = prompt('Qual é a nota do aluno? ');
let nota2 = prompt('Nota 2? ');
let nota3 = prompt('Nota 3');
let mediaNota = (nota + nota2 + nota3) / 3;
switch (true) {
  case nota >= 80:
    alert('Nota is A')
    break;
  case nota >= 70:
    alert('Nota is B')
    break;
  case nota >= 60:
    alert('Nota is C')
    break;
  case nota >= 60:
    alert('Nota is D')
    break;
  default:
    alert('Nota is F')
    break;
}

*/
let weater = prompt('what month is it? ');
let weaterToday = weater.toLowerCase();

switch (weaterToday) {
  case 'September':
    alert('Autumn')
    break;
  case 'Octuber'
    alert('Autumn')
  default:
    alert('Summer')
    break;
}
