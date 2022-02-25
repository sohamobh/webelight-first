//we can use any type of key or value
const mymap = new Map();

const key1 = 'mystr';
const key2 = {};
const key3 = function () { };

//setting map values
mymap.set(key1, 'This is a string');
mymap.set(key2, 'This is a blank object');
mymap.set(key3, 'This is an empty function');
console.log(mymap);

//getting values of the map
let val1 = mymap.get(key1);
console.log(val1);
let val2 = mymap.get(key2);
console.log(val2);
let val3 = mymap.get(key3);
console.log(val3);

//getting size of the map
console.log(mymap.size);

//using loops to get keys and values
for (let [key, value] of mymap) { //both
    console.log(key, value);
}
for (let key of mymap) { //only keys
    console.log('Key is..', key);
}
for (let value of mymap) { //only values
    console.log('Value is..', value);
}

//you can loop through a map using for...each loop
mymap.forEach((value, key) => {
    console.log('Key is ', key);
    console.log('Value is ', value);
})

//converting map to an array
let arr = Array.from(mymap);
console.log('Map to array is ', arr);

let arrkey = Array.from(mymap.keys());
console.log('Map to array keys is ', arrkey);

let arrval = Array.from(mymap.values());
console.log('Map to array values is ', arrval);