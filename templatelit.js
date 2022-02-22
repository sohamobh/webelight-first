//es5
console.log("This is string 1." + "This is string 2.")
//es6
console.log(`This is string 1. This is string 2.`)

let fname = "Soha";
let lname = "Mobh";
console.log("My name is " + fname + ". My surname is " + lname + "."); //es5
console.log(`My name is ${fname} and my surname is ${lname}.`) //es6

let a = 20;
let b = 30;
console.log("Fifty is " + (a + b) + " and \nnot 70."); //es5
console.log(`Fifty is ${a + b} 
and not ${a * b}.`);//es6

//methods
const firstname = `${fname}`;
const fullname = `${fname} ${lname}, `;

console.log(firstname.startsWith('S'));
console.log(`${fname}`.endsWith('A'));
console.log(firstname.includes('So'));
console.log(fullname.repeat(5));