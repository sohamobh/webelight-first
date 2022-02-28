//findindex() returns the index of the first element in an array that pass a test.
let age = [10, 2, 22, 17, 30];
console.log(age);

let f = age.findIndex(checkadult);
console.log(f);

function checkadult(age) {
    return age >= 18;
}