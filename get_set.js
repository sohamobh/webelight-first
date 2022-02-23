class User {
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }
}
let newuser = new User();
newuser.name = "Soha";
console.log(newuser.name);