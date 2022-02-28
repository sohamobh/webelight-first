// the Array.of() method always creates an array that contains the values that 
// you pass to it regardless of the types or the number of arguments.
let arr = [10, 20, 30];
console.log(arr);
let newarr = Array.of(22, 11, 'hii');
console.log(newarr.length);
console.log(newarr);
console.log(newarr[2]);