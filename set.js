//similar to array
//sets cant store duplicate values like in array
//array[1,1,2]
//sets cant store two 1s

const myset = new Set();

//add value
myset.add(60);
myset.add(60);
myset.add(11);
myset.add({
    name: 'soha'
});
myset.add('Mobh');
myset.add(99.1);

console.log(myset.size);
console.log(myset);

//search for a value
console.log(myset.has('Mobh'));
console.log(myset.has(00));

//delete item from the set
myset.delete(60);
console.log(myset);

//loop through set
for (let item of myset) {
    console.log(item);
}

//convert set to array
const myarr = Array.from(myset);
console.log(myarr);