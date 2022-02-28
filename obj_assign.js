//allows you to combine 2 or more js objects together
const obj1 = {
    fname: 'Soha',
    lname: 'MMOOBBHH' //the last executed argument takes control over the new argument
};

const obj2 = {
    lname: 'Mobh'
};
const final = Object.assign(obj1, obj2, { mname: 'Salim' }); //new object, objects are separated by comma
console.log(final);
const copy = Object.assign({}, final); //copies the objects into new variable; cloning
console.log(copy);

function printName(options) {
    const defaults = {
        firstname: 'Gigi', //default values
        lastname: 'Hadid'
    };
    options = Object.assign(defaults, options); //assigning default values
    console.log(`${options.firstname} ${options.lastname}`);
}
printName({
    //firstname: 'Zayn',
    lastname: 'Malik'
});