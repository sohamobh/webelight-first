class Person {
    static name = "Soha";
    static height = 160;

    static getinfo() {
        console.log(`My name is ${this.name} and my height is ${this.height}`);
    }
    static setinfo(value) {
        this.height = value;
    }
}
Person.getinfo();
Person.setinfo(190);
Person.getinfo();