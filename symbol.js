//symbol is used to generate a unique primitive.
const sym1 = Symbol();
const sym2 = Symbol();

console.log("Symbol 1 is ", sym1);
console.log("Symbol 2 is ", sym2);
console.log("Type of symbol is", typeof sym1);

console.log(sym1 === sym2); //symbols are unique

const k1 = Symbol();
const k2 = Symbol();

myobj = {};
myobj[k1] = "Soha";
myobj[k2] = "Mobh";
myobj["Name"] = "Good boy";

console.log(myobj);
console.log(myobj[k1]);
console.log(myobj[k2]);

for (key in myobj) {
    console.log(key, myobj[key]) //symbols are ignored in for...in loop
}
console.log(JSON.stringify(myobj));