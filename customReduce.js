/**
 *  implementing custom reduce function
 */


Array.prototype.customReduce = function (callback, accumulator) {

    for (element of this) {
        accumulator = callback(element, accumulator);
    }

    return accumulator;
}

/**
 *  playing with custom reduce function
 */

let array = [1, 2, 4, 5, 6];

let sum = array.customReduce(function (acc, curr) {
    return acc + curr;
}, 0);

console.log(`sum: ${sum}`);

let max = array.customReduce(function (max, curr) {
    return curr > max ? curr : max;
}, 0);

console.log(`max: ${max}`);


