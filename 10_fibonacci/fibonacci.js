const fibonacci = function (num) {
    let a = 1
    let b = 1
    if (num > 2) {
        for (let i = 2; i < num; i++) {
            let sum
            sum = a + b
            a = b
            b = sum
        }
        return b
    }
    else if (num < 0) {
        return "OOPS"
    }
    else {
        return 1
    }

};

// Do not edit below this line
module.exports = fibonacci;
