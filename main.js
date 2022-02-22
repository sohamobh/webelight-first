//all the variables, functions and classes will be imported
//import * as soha from "./library.js";

import { default as soha } from "./library.js"; //import soha function from "./library.js"
soha();

import { message, user as newuser, test } from "./library.js";  //can be renamed using as keyword followed by new name
console.log(message); //console.log(soha.message);

document.body.innerHTML = message; //will get printed on html page

console.log(newuser("Function")); //console.log(soha.user("Function"));

let a = new test(); //let a = new soha.test();

import { testagg } from "./bridge.js";
console.log(testagg());