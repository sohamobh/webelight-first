//***3 states***
//1. pending
//2. fulfill->resolve()->then()
//3. reject->reject()->catch()
// let complete = true; //to check the condition
// let prom = new Promise(function (resolve, reject) {

function prom(complete) {
    return new Promise(function (resolve, reject) {
        console.log("Fetching data.. please wait"); //state 1
        setTimeout(() => {
            if (complete == true) { //if promise is fulfilled //state 2
                resolve("Successful");
            }
            else {
                reject("Oopss... Failure"); //state 3
            }
        }, 3000)
    })
};

// let onFulfillment = (result) => {
//     console.log(result);
// }
// let onRejection = (error) => {
//     console.log(error);
// }
// prom(true).then(onFulfillment);
// prom(true).catch(onRejection);
// prom(false).then(onFulfillment).catch(onRejection); //method chaining
prom(false).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});



function prom(a, b) {
    return new Promise(function (resolve, reject) {
        console.log("Fetching data.. please wait"); //state 1
        let c = a / b;
        setTimeout(() => {
            if (a, b) { //if promise is fulfilled //state 2 //a > 0 && b > 0
                resolve(`Answer : ${c}`);
            }
            else {
                reject("Oopss... Failure"); //state 3
            }
        }, 2000)
    })
};


prom(2, 0).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

// console.log(prom(false));

//promises are effective for longer processes