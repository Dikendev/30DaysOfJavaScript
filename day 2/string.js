//let js = "Javascript é incrivel e irei terminar esse mês os conceitos basicos";
//console.log(js.length);

//let firstName = 'Asabeneh';
//console.log(firstName.length);


//let string = 'javaScript'
//console.log(string.substring(4, 0));


//console.log(firstName.toLowerCase());

//console.log(js.toLowerCase());

//console.log(js.split());
//console.log(firstName.split());
//console.log(firstName.split(""));

//let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

//console.log(countries.split(","));
//console.log(countries.split(", "));


//console.log(challenger);
//console.log(challenger.length);
//console.log(challenger.toUpperCase());
//console.log(challenger.toLowerCase());
//console.log(challenger.substring(0,3));
//console.log(challenger.replace(30, " "));
//console.log(challenger.includes("30"));
//console.log(challenger.split());
//console.log(challenger.split(" "));

//let FGM = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
//console.log(FGM.split(","));


//console.log(challenger.replace("JavaScript", "Python"));
//console.log(challenger.charAt(15));
//console.log(challenger.charCodeAt("J"));
//console.log(challenger.indexOf("a"));
//console.log(challenger.lastIndexOf("a"));
//let phrase = "You can not end a sentence with because because because is a conjuntion";
//console.log(phrase.indexOf("because"));
//console.log(phrase.lastIndexOf("because"));
//console.log(phrase.search("because"));
//let challenger = "30 Days of JavaScript";
//console.log(challenger.trim());

//console.log(challenger.startsWith("3"))
//console.log(challenger.endsWith("S  "))
//let repeat = /a/gi
//console.log(challenger.match(repeat));
//let first = "30 Days of"
//let second = "JavaScript"
//let space = " "
//console.log(first + space + second);
//let challenger = "30 Days of JavaScript "
//console.log(challenger.repeat(2))

//level 2

//let quote = "There is no exercise better for the heart than reaching down and lifting people up.";
//let author = "John Holmes teaches us to help one another.";
//let space = " ";

//console.log(quote + space + author);
//let numberS = "10"
//console.log(parseInt(numberS));

//console.log
//let string = "Python and jargon"
//let on = /on/gi
//console.log(string.match(on))

//let string = "I hope this course is no full of jargon"
//let jargon = /jargon/gi
//console.log(string.match(jargon));

// const num = Math.floor(Math.random () * 100) // creates random number between 0 and 10
// console.log(num)


// Proway Coderbyte

let array = new Array(5);
let aux = 1;
        
for (let i = 0; i < array.length; i++) {
  aux = aux * (i + 1);
  array[i] = aux / 2;
}
// console.log(array[3]); 


function randomMethod(number) {
  return number == 0 ? 1 : number * randomMethod(number - 1);

}
// console.log(randomMethod(5));

  


function minimum () {
  let moneyBills = [200, 100, 50, 20, 10, 5, 2, 1];
  let value = 336;
  console.log("The minimum number of each money bill required to get the value %d is:", value);
  for (let i = 0; i < moneyBills.length; i++) {
      let moneyBillQuantity = value / moneyBills[i];
      value = moneyBillQuantity * moneyBills[i];
      console.log("R$ %d = %d; ", moneyBills[i], moneyBillQuantity);      
  }
}
// minimum();




function descendingWay() {
  let a = 3;
  let b = 2;
  let c = 4;

  if (a > b && a > c) {
    if (b > c) {
      console.log("%d, %d, %d", a, b, c);
    } else {
      console.log("%d, %d, %d", a, c, b);
    }
  } else if ( b > a && b > c) {
    if (a > c) {
      console.log("%d, %d, %d", b, a, c);
    } else {
      console.log("%d, %d, %d", b, c, a);
    }
  } else {
    if (b > a) {
      console.log("%d, %d, %d", c, a, b);
    } else {
      console.log("%d, %d, %d", c, b, a);
    }
  } 
}

descendingWay()