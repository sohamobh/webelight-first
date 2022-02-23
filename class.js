//class declaration
class Mobile { //according to naming convention, class name should start with capital letter.
    constructor() { //one class can have just 1 constructor
        console.log("Constructor");
        this.model = "iPhone"; //instance member
    }
    show() { //prototype member
        //return this.model + " Price = 75,000.";
        return `This is ${this.model} and its price is 75,000`;
        console.log("prototype function.. " + this.model)
    }
    static message() {
        console.log("Byee");
    }
}
let item = new Mobile();
console.log(item.model);
document.write(item.show());
//console.log(message());