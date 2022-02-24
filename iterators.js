function firstIterator(values) {
    let nextIndex = 0;
    //will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }

            else {
                return {
                    done: true
                }
            }
        }
    }
}

const myArr = ['A', 'B', 'C', 'D'];
console.log("My array is ", myArr);

const first = firstIterator(myArr);
console.log(first.next().value);
console.log(first.next().value);
console.log(first.next().value);
console.log(first.next().value);
console.log(first.next().value);

//iterators will have next, value and done in it
// done and value are iterator protocol
// An object is iterable when it contains a method called [Symbol.iterator] that takes no argument
// and returns an object which conforms to the iterator protocol.
// The [Symbol.iterator] is one of the built-in well-known symbols in ES6.

//inbuilt iterators
//array, map and set
