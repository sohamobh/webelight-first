//promise.all executes all the promises at once.
//if all the promises gets fulfilled, only then resolve function is called and .then is executed.
//if any one promise fails, then rejected is called and .catch is executed

//then() and catch() are used only once in promise.all().

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First promise has been resolved..")
        resolve(10);
    }, 1000)
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Second promise has FAILED..") //FAILED PROMISE
        reject("Failed");
    }, 2000)
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Third promise has been resolved..")
        resolve(30);
    }, 3000)
});
let total = 0;
Promise.all([p1, p2, p3]).then((result => {
    for (let i in result) {
        total += result[i];
    }
    console.log(`Total = ${total}`);
    console.log(`Results: ${result}`)
})).catch((result => {
    console.log(`Error: ${error}`)
}));