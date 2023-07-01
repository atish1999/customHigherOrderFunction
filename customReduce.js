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

let arr = [1, 2, 4, 5, 6];

let sum = arr.customReduce(function (acc, curr) {
    return acc + curr;
}, 0);

console.log(`sum: ${sum}`);

let max = arr.customReduce(function (max, curr) {
    return curr > max ? curr : max;
}, 0);

console.log(`max: ${max}`);


