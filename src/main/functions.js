//Map function
function map(array, cb) {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
        result.push(cb(array[i]));
    }
    return result;
}
console.log(map([1, 2, 3, 4, 5], item => item + 1));

//Filter Function
function filter(array, cb) {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
        if (cb(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

console.log(filter([1, 2, 3, 4, 5], item => item >= 3));

//Reduce Function
function reduce(array, cb, initialValue) {
    let result = initialValue;
    for (let i = 0; i < array.length; i += 1) {
        result = cb.call(undefined, result, array[i], i, array);
    }
    return result;
}

console.log(reduce([1,2,3,4,5], (result,item) => {
    return result + item;
}, 0));