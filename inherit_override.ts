class baseClass{
    display(): void{
        console.log('This is Parent class');
    }
}
class subClass extends baseClass{
    display(): void {
        super.display(); //super keyword will call the display function of parent class
        console.log('This is inherited class..');
    }
}

let ob1=new subClass();
ob1.display();