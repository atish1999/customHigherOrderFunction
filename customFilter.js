/**
 *  implementing custom filter function
 * 
 */

Array.prototype.customFilter = function (callback) {
    let result = [];
    for (element of this) {
        if (callback(element) === true) {
            result.push(element);
        }
    }

    return result;
}

let evenNumbers = [1, 2, 3, 4, 5, 6].customFilter(function (x) {
    return x % 2 === 0;
})

console.log(evenNumbers);