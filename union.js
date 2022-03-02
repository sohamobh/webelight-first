//union gives the ability to combine 2 or more dataypes using pipe(|) sign using same variable name
//type1 | type2 | type3
var un;
un = 12;
console.log(un);
un = "Union";
console.log(un);
console.log("**********************************");
console.log("**********************************");
//function parameter
function un_func(val) {
    if (typeof val == "string") {
        console.log("Hi.." + val);
    }
    else {
        console.log("The number is = " + val);
    }
}
un_func(11);
un_func("Soha");
console.log("**********************************");
console.log("**********************************");
//array
var un_arr;
un_arr = [11, 33, 77];
console.log('NUMBERS = ' + un_arr);
un_arr = ['A', 'B', 'C', 'D'];
console.log('STRING = ' + un_arr);
