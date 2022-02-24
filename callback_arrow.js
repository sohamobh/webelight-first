//regular callback function
//functions passed as parameter to other function
setTimeout(function () {
    console.log("Regular callback");
}, 1000)

//using arrow function
setTimeout(() => {
    console.log("Call back using arrow..")
}, 1000)