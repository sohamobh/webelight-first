// dataypes cannot be changed
//let count = 5;
//count = 'a';//immediate error is generated
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var colorred = 0;
var colorgreen = 1;
var colorblue = 2;
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
var bgcolor = color.red;
//1. number
//2. boolean
//3. any
//4. array
//5. any[]
//6. string
//7. emum   eg:- enum color{red=0,green=1,blue=2};
//let bgcolor=color.red;
