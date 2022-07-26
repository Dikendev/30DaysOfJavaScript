// 1.
// Declare a function fullName and it print out your full name.

function fullName() {
    console.log('Diego Kennedy Guimaraes Barros');
}
// fullName();

// 2.
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName2(firstName, lastName) {
    fullName = `${firstName} ${lastName}`;
    return fullName; 
}
// console.log(fullName2('Diego Kennedy', 'Guimaraes Barros'));
 
// 3.
// Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(a, b) {
    sum  = a + b;
    return sum;
}
// console.log(addNumbers(2,2));

// 4.
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    area = (length * width);
    return area;
}
// console.log('area of Rectangle: ', areaOfRectangle(23,12),"cm");

// 5.
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
    perimeter = 2 * (length * width)
    return perimeter;
}
// console.log('Perimeter of Rectangle: ', perimeterOfRectangle(3,3));

// 6.
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
    volume = (length * width * height);
    return volume;
}
// console.log('Volume of rectangular prism: ', volumeOfRectPrism(10,10,23));

// 7.
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r) {
    area = Math.PI * r * r;
    return area;
}
// console.log('Area of Circle: ', areaOfCircle(2));

// 8.
//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r) {
    circumference = (2 * Math.PI) * r;
    return circumference;
}
// console.log('Circumference of circle is: ', circumOfCircle(23));



