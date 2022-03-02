//accessing array elements
var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
console.log("**********************************");
console.log("**********************************");
//array object
var arr = new Array(5);
for (var i_1 = 0; i_1 < arr.length; i_1++) {
    arr[i_1] = i_1 * 2;
    console.log(arr[i_1]);
}
console.log("**********************************");
console.log("**********************************");
//array constructors
var arr_names = new Array("Hello,", "and", "welcome", "to", "TypeScript");
;
for (var i = 0; i < arr.length; i++) {
    console.log(arr_names[i]);
}
