class Mobile {
    static disp() { //it gets called without an object, only class name can call it.
        return "Static Method..";
    }
}
console.log(Mobile.disp());
document.write(Mobile.disp());