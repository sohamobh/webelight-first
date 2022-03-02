class myClass{
    name: string;
    age: number;
    lastname ='Mobh';
    getName(){
        console.log('My name is '+this.name);
    }
    getAge(){
        console.log('My age is '+this.age);
    }
}

let myObj=new myClass();
myObj.name='SOHA';
myObj.getName();
myObj.age=21;
myObj.getAge();
console.log(myObj.lastname);