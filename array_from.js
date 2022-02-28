//there are many uses of arr.from() method.
//array.from() has all the array prototype methods

//use 1
//separates each element from the string
let array = 'Welcome';
console.log(Array.from(array));
console.log([...array]); //alternative 1 of array.from()

const str = Array.from(array); //another way to use array.from() for separation
console.log(str);

//use 2
//creates new array
//const newarr = Array.from({ length: 5 }, (v, i) => 10, 20, 'Soha'); //it will print only 10, 5 times(length of the array)
const newarr = (new Array(5)).fill(0).map((v, i) => i);//alternative of the above statement
console.log(newarr);

//use 3
//removes duplicate elements from the array
const arr = [1, 1, 2];
//const unique = Array.from(new Set(arr)); //removes duplicate 1 from the array and the size is decreased to 2
const unique = [...new Set(arr)];
console.log(unique);

//use 4
// join a string
const func = function () {
    console.log(Array.from(arguments).join('')); //contains all the prototype methods
}
func('s', 'o', 'h', 'a');