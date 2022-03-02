//accessing array elements
var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);

console.log("**********************************");
console.log("**********************************");

//array object
var arr:number[]=new Array(5);
for(let i=0;i<arr.length;i++){
    arr[i]=i*2;
    console.log(arr[i]);
}

console.log("**********************************");
console.log("**********************************");

//array constructors
var arr_names:string[]=new Array("Hello,","and","welcome","to","TypeScript");;
for(var i=0;i<arr.length;i++){
    console.log(arr_names[i]);
}