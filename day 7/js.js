// 1.
// Declare a function fullName and it print out your full name.

function fullName() {
  console.log('Diego Kennedy Guimaraes Barros');
}
// fullName();

// 2.
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName2(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  return fullName; 
}
// console.log(fullName2('Diego Kennedy', 'Guimaraes Barros'));
 
// 3.
// Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(a, b) {
  let sum  = a + b;
  return sum;
}
// console.log(addNumbers(2,2));

// 4.
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
  let area = (length * width);
  return area;
}
// console.log('area of Rectangle: ', areaOfRectangle(23,12),"cm");

// 5.
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length * width)
  return perimeter;
}
// console.log('Perimeter of Rectangle: ', perimeterOfRectangle(3,3));

// 6.
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
  let volume = (length * width * height);
  return volume;
}
// console.log('Volume of rectangular prism: ', volumeOfRectPrism(10,10,23));

// 7.
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}
// console.log('Area of Circle: ', areaOfCircle(2));

// 8.
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r) {
  let circumference = (2 * Math.PI) * r;
  return circumference;
}
// console.log('Circumference of circle is: ', circumOfCircle(23));

// 9.
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function densityobj(mass, volume) {
  let density = mass / volume;
  return density; 
}
// console.log('density: ', densityobj(30,2));

// 10.
// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speedobj(distance, timetaken) {
  let speed = distance / timetaken;
  return speed;
}
// console.log("Speed: ", speedobj(10, 2), 'm/s');

// 11.
// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

const weightOfSubstance = (mass, gravity = 9.81) => mass * gravity + 'N';
// console.log('Weight of a an object in Newton: ', weightOfSubstance(50));

// 12.
// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = (oC) => (oC * 9/5) + 32;
// console.log(convertCelsiusToFahrenheit(30));

// 13.
// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

const bodyMassIndex = (weight, height) => {
  let bmi = weight / (height * height);

  if (bmi >= 30) {
    console.log('Obese');
  } else if (bmi >= 25) {
    console.log('Overweight');
  } else if (bmi >= 18.5) {
    console.log('Normal');
  } else {
    console.log('Underweight');
  } 
}
//bodyMassIndex(2220, 3)

// 14.
//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function getSeason(month) {
  
  let winter = 'dec, december, jan, january, feb,february,12,1,2,';
  let spring = 'mar,march,apr,april,may,3,4,5,';
  let summer = 'jun,june,jul,july,aug,august,6,7,8,';
  let fall = 'sep,september,oct,october,nov,november,9,10,11,';
  let season = 'unknown';
  if (winter.indexOf(month) != -1) {
      season = 'winter';
  } else if (spring.indexOf(month) != -1) {
      season = 'spring';
  } else if (summer.indexOf(month) != -1) {
      season = 'summer';
  } else if (fall.indexOf(month) != -1) {
      season = 'fall';
  }
  return (season);
}
// console.log('Season is:', getSeason('mar'));

// 15.
// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// lvl 2 - 1.
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation() {
  let a = prompt("Enter the first number: ");
  let b = prompt("Enter the second number: ");
  let c = prompt("Enter the third number: ");
  let discriminant = b * b - 4 * a * c;

}


// lvl 2 - 2.
// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadEquation() {
  let root1, root2;
  let a = prompt("Enter the first number: ");
  let b = prompt("Enter the second number: ");
  let c = prompt("Enter the third number: ");
  let discriminant = b * b - 4 * a * c;
  
  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  }
  else if (discriminant == 0) {
      root1 = root2 = -b / (2 * a);
      console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  }
}
// solveQuadEquation();

// lvl 2 - 4.
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function date() {
  const d = new Date();
  return d;
} 
// console.log(date())

// lvl 2 - 5
// Declare a function name swapValues. This function swaps value of x to y.

function swapValues() {
  let a = 5, b = 6;
  [a, b] = [b, a];
  console.log(`${a} ${b}`);
}
//swapValues()

// lvl 2 - 6
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray() {
  let array = [1, 2, 3, 4, 5,]
  let ret = new Array;
  for(let i = array.length-1; i >= 0; i--) {
    ret.push(array[i]);
    
  }
  return ret;
}
// console.log(reverseArray());

var x = [ 'p0', 'p1', 'p2' ]; 
call_me(x);

Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.


function call_me(params) {
  for (i=0; i<params.length; i++) {
    console.log(params[i])
  }
}