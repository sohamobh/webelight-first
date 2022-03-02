let num1;
let num2;
let sum=num1+num2;

function check_num(num1,num2){
    if(num1==100 || num2==0){
        return true;
    }
    else if(sum==100){
        return true;
    }
    else{
      return false;
    }
}
console.log(check_num(11,89));
console.log(check_num(0,100));
console.log(check_num(1,2));