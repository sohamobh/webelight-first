//1st example
let name = 'Soha';
//let name obj = {name:name}; es5(old style)
let obj = { name };//value name and property names are same; es6
console.log(obj);

//2nd example
let n = "student";
let obj1 = {
    [n + "name"]: "Soha Mobh", //es6; here, n works as label that is student and name is concatenated.
    technology: "React",
    detail: function () {
        return `${this.studentname} is a trainee of ${this.technology}`
    }
}; //es6
console.log(obj1);
console.log(obj1.detail());

//3rd example
let obj2 = {
    name: "Sohaaa",
    'show name'() {
        console.log(this.name)
    }
};
console.log(obj2['show name']());