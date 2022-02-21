function sum(...args) {
    return args
        .filter(function (e) {  //checks for numbers
            return typeof e === 'number';
        })
        .reduce(function (prev, curr) {
            return prev + curr; //adds the numbers
        });
}

let result = sum(10, 'Hi', null, undefined, 20, 100);
console.log(result);