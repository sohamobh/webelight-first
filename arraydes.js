//array destructing is used to assign individual variable names to all the elements og an array(unpack)
const myproglang = ['js', 'php', 'c', 'java', 'python'];
//es5

let topp1 = myproglang[0];
let topp2 = myproglang[1];
let topp3 = myproglang[2];
let topp4 = myproglang[3];
let topp5 = myproglang[4];
console.log("My fav programming language is " + topp1);

//es6

//let [top1, top2, top3, top4, top5] = myproglang;
//console.log("My fav programming language is " + top1);

console.log(myproglang.length);
let [top1, , , , top5] = myproglang;
console.log(`My fav programming language is ${top1} and my least favourite is ${top5}.`);

let a = 5;
let b = 10;
console.log("a = " + a);
console.log("b = " + b);
//swapping without using third variable
a = a + b;
b = a - b;
a = a - b;
console.log("a = " + a);
console.log("b = " + b);