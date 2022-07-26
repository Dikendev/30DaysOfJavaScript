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

//5.
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

