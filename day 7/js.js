function sumArrayValues(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5,];
// console.log(sumArrayValues(numbers));

const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}
// console.log(areaOfCircle(11));

(function(n){
    console.log(n * n);
})//(3);

let squaredNum = (function(n){
    return n * n;
})(3);
// console.log(squaredNum);

//Arrow functions

function square(n){
    return n * n;
}
// console.log(square(7));

const square2= n => {
    return n * n;
}
// console.log(square2(7));

const square3 = n => n * n  // em uma unica linha de codigo
// console.log(square3(3));

const changeToUpperCase = arr => {
    const newArr = [];
    for(const element of arr){
        newArr.push(element.toUpperCase());
    }
    return newArr;
}
const countries = ['Finland', 'Sweden', 'Norway'];
console.log(changeToUpperCase(countries));