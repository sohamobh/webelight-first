//performing a task
function greet(fname, lname) {
    console.log('Hellooo' + ' ' + fname + ' ' + lname);
}
greet('Soha', 'Mobh');
greet('Mobh');

//calculates a value
function square(number) {
    return number * number;//answer is returned to main
}
let ans = square(2); //the result is caught on ans variable
console.log(ans);// print; 1 function call