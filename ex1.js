//check 2 numbers. return true if one of the numbers is 100 or the sum of both the numbers is 100
var num1;
var num2;
var sum = num1 + num2;
function check_num(num1, num2) {
    if (num1 == 100 || num2 == 100) {
        return true;
    }
    else if (sum == 100) {
        return true;
    }
    else {
        return false;
    }
}
console.log(check_num(100, 89));
console.log(check_num(0, 100));
console.log(check_num(1, 2));