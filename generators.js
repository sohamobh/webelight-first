function* myGenerator() {
    let i = 0;
    yield 1;
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