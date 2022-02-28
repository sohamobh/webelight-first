// The Object.is() behaves like the === operator with two differences:
// -0 and +0
// NaN

//= and -
let amt = 0;
let vol = -0;
console.log(vol === amt); //value and datatype is same
console.log(Object.is(vol, amt)); //object.is treats = and - as different values

//NaN
let qty = NaN;
console.log(qty === qty); //=== treats nan as separate values
console.log(Object.is(qty, qty));//.is considers it equal