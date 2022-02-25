function* myGenerator() { //* indicated that the function is a generator functions
    let i = 0;
    yield 1;  //allows you to pause and resume a generator function 
    yield 2;
    yield 3;
    yield 4;
}
const gem = myGenerator();
console.log(gem.next());
console.log(gem.next());
console.log(gem.next());
console.log(gem.next());
console.log(gem.next());
console.log(gem.next());