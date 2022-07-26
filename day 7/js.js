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
