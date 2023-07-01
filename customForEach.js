/**
 *  implementing custom For each
 * 
 */

Array.prototype.customForEach = function (callback) {

    if (this.length < 1) {
        throw new Error('array is empty');
    }

    for (element of this) {
        callback(element);
    }
}

let store = [20, 30, 450, 124];
// let store = [];
let sum = 0;


// store.forEach(function (number) {
//     sum += number;
// })

// doing sum
store.customForEach((number) => {
    sum += number;
})

console.log(`sum: ${sum}`);

// calculate minimum

let min = Number.MAX_VALUE;

store.customForEach((number) => {
    if (number < min) {
        min = number;
    }
})

console.log(`minimum: ${min}`);