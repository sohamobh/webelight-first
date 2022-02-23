function fact(aclass) {
    return new aclass;
}
let greet = fact(class {
    sayHi() {
        console.log("Hey there..");
    }
}
)
greet.sayHi();