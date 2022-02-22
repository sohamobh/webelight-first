const biodata = {
    name: "Soha",
    age: 21,
    hobby:
    {
        first: 'Dance',
        second: 'Video games'
    }
}
//es5
console.log(`My name is ${biodata.name}.`);

//es6
//let name, age; //property name and variable name should be same
//let { name: myname, age } = biodata; //way to fix the above limitation.
//({ name, age } = biodata);

let { name, age, hobby } = biodata; //each object property is given distinct variable name.
console.log(`My name is ${name} and my age is ${age}.`);

//console.log(`My name is ${myname} and my age is ${age}.`);
console.log(`I love playing ${hobby.second}.`);