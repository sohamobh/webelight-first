//regular object method
const me = {
    talk: function () {
        return "Regular object method";
    }
}
console.log(me.talk);

//object method using arrow function
const me1 = {
    talk: () => {
        return "Object function using arrow.."
    }
}
console.log(me1.talk);