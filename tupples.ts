//allows to sore values of varied datatypes unlike arras

var tup = [11,"Hello"];
console.log(tup[0]);
console.log(tup[1]);

console.log("**********************************");
console.log("**********************************");


//assign values to tupple
var tup1=[];
tup1[0]="assigned value";
tup1[1]=22;
tup1[2]="welcome";
console.log(tup1);

console.log("**********************************");
console.log("**********************************");

//push in tupple(used to add new elements) and pop elements from tupple(removing last elements)
var tup2 = [11,"Hello"];
console.log(tup2[0]);
console.log(tup2[1]);

// console.log("**********************************");
console.log("**********************************");

tup2.push("New element");
console.log(tup2);

// console.log("**********************************");
console.log("**********************************");

tup2.pop();
console.log(tup2);



//updating an existing tupple
var tup3 = [11,"Hello"];
console.log("Value at index 0 = "+ tup2[0]);

tup3[0]="Updated Value";
console.log(tup3);

console.log("**********************************");
console.log("**********************************");

//destructing a tupple(naming each element of a tupple)
var tup4 = [11,"New name"];
var[a,b]=tup4;
console.log(a);
console.log(b);