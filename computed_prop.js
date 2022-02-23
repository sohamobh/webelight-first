let name = 'fullName';

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get [name]() { //here, [name] refers to fullname (property name)
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('Soha', 'Mobh');
console.log(person.fullName);