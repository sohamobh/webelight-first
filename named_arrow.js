//regular named function
function sayHello() {
    console.log("Regular named function..")
}
sayHello();

//named function using arrow
//sayHello() => console.log("Named function using arrow");
//console.log(sayHello());

//this will throw an error.
//named functions cannot be converted into arrow functions.
//therefore, constructor also cannot be made arrow functions.

//regular constructor function
//function person(name) {
this.name = name
//}
//const n = new person("soha");
//console.log(n);

//constructor function using arrow
const person = (name) => this.name = name;
const n1 = new person("soha");
console.log(n);

//this code will also throw an error