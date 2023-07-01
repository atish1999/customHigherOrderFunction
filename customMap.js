/**
 *  implementing custom map function
 */


function customMap(cb) {
    let res = [];
    for (let idx = 0; idx < this.length; ++idx) {
        res.push(cb(this[idx]));
    }

    return res;
}

Array.prototype.customMap = customMap;

let arr = [5, 1, 2, 4, 6];

/**
 *  playing with custom map function
 */

// Double the Array
function Double(x) {
    return x * 2;
}

// Tripple the Array
function Tripple(x) {
    return x * 3;
}

let output = arr.customMap(Tripple);

console.log(output);