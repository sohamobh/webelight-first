//class inheritance
//ability to create new classes from existing ones
class parentClass{
    prop1: number;
    constructor(prop2: number){
        this.prop1=prop2;
    }
}

class childClass extends parentClass //single inheritance
{
    display():void{
        console.log("Value of property 1 is " + this.prop1)
    }
}
let obj = new childClass(11);
obj.display();

//typescript supports 2 types inheritance
//1. single
//2. multi level

//TS does not support multiple inheritance