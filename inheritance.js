class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`My name is ${this.name} and my age is ${this.age}.`);
    }
    code() {
        console.log(`${this.name} this the programmar.`);
    }
}

class Programmar extends Person { //inherits person class
    constructor(name, age, exp) {
        super(name, age);  //refers to the variables of class person. super should always be called before THIS.
        this.exp = exp;
    }

}
let Person1 = new Person("Soha", 22);
let Programmar1 = new Programmar("Mobh", 22, 2);

console.log(Person1);
console.log(Programmar1);
Person1.code();