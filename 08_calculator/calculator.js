const add = function (num1, num2) {
    return (num1 + num2)
};

const subtract = function (num1, num2) {
    return (num1 - num2)
};

const sum = function (arr) {
    let arrLength = arr.length
    let sum = 0
    for (let i = 0; i < arrLength; i++) {
        sum += arr[i]
    }
    return sum
};

const multiply = function (...manyNum) {
    let length = manyNum.length
    let product = 1
    for (let i = 0; i < length; i++) {
        product *= manyNum[i]
    }
    return product
};

const power = function (num1, num2) {
    return (num1 ** num2)
};

const factorial = function (num1) {
    let product = 1
    if (num1 == 0) {
        return 1
    }
    else {
        for (let i = 1; i <= num1; i++) {
            product *= i
        }
        return product
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
