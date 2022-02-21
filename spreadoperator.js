//use 1-replaces apply from es5
function sum(a, b, c) {
    console.log(a + b + c);
}
var arrVal = [1, 200, 3];
console.log(...arrVal);
sum(...arrVal);

//use 2-it replaces concatenate
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [6, 7, 8, 9, 10];

//arr1 = arr1.concat(arr2); //es5
arr1 = [...arr1, ...arr2, ...arr3, ...arr1]; //es6
console.log(arr1);

//use 3-it replaced copy

let ac1 = [1, 2, 3];
let ac2 = ac1; //copied array 1
ac2.push(4, 5); //added extra values to the existing array
console.log(ac2);
console.log(ac1); //it forgets its original values and takes up array 2's value