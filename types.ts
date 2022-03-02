// dataypes cannot be changed
//let count = 5;
//count = 'a';//immediate error is generated

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[]=[1,2,3];
let f: any[]=[1,true,'a',false];

const colorred = 0;
const colorgreen = 1;
const colorblue = 2;
enum color{red=0,green=1,blue=2};
let bgcolor=color.red;

//1. number
//2. boolean
//3. any
//4. array
//5. any[]
//6. string
//7. emum   eg:- enum color{red=0,green=1,blue=2};
                //let bgcolor=color.red;