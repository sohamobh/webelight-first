let promisecall = function (returnData, message) {
    return function (resolve, reject) {
        setTimeout(() => {
            console.log(`The ${message} promise has been resolved`)
            resolve(returnData);
        }, returnData * 100);
    }
};
let p1 = new Promise(promisecall(10, "first"));
let p2 = new Promise(promisecall(20, "second"));
let p3 = new Promise(promisecall(30, "third"));
let p4 = new Promise(function (resolve, reject) {
    reject(`The fourth function has been rejected`);
});

let total = 0;
Promise.all([p1, p2, p3, p4]).then((result => {
    for (let i in result) {
        total += result[i];
    }
    console.log(`Total = ${total}`);
    console.log(`Results: ${result}`)
})).catch((result => {
    console.log(`Error: ${error}`)
}));

