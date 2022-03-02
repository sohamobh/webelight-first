//interface is used to declare the data types of members and methods of classes and objects

//objects
interface int1{
    name: string,
    age: number,
    func:()=> string
}

let obj1: int1={
    name: "Soha",
    age: 21,
    func:function(){
        return "Hiiiiiiii";
    }
}

console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.func());

let obj2: int1={
    name: "Mobh",
    age: 50,
    func:function(){
        return "Hellooooo";
    }
}

console.log(obj2.name);
console.log(obj2.age);
console.log(obj2.func());

//interface can be used with array, union and also for single and multiple inheritance