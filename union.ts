//union gives the ability to combine 2 or more data types using pipe(|) sign using same variable name
//type1 | type2 | type3

var un: string | number;
un=12;
console.log(un);
un="Union";
console.log(un);

console.log("**********************************");
console.log("**********************************");

//function parameter
function un_func(val : string | number){ //any data types can be used like array, boolean, etc..
    if(typeof val == "string"){
        console.log("Hi.." + val)
    }
    else{
        console.log("The number is = "+val)
    }
}
un_func(11);
un_func("Soha");

console.log("**********************************");
console.log("**********************************");

//array
var un_arr: string[] | number[];
un_arr=[11,33,77];
console.log('NUMBERS = '+un_arr);

un_arr=['A','B','C','D']
console.log('STRING = '+un_arr);