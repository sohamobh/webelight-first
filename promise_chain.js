let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result); // 10 //.then indicates promise chaining
    return result * 2;
}).then((result) => {
    console.log(result); // 20 = 10*2 //the result of the first promise will be taken into second promise
    return result * 3;
}).then((result) => {
    console.log(result); // 60 = 20*3
    return result * 4;
});


//syntax
// step1()
//     .then(result => step2(result))
//     .then(result => step3(result))
//     ...