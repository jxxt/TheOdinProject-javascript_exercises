const sumAll = function (startNum, endNum) {
    if (Number.isInteger(startNum) && Number.isInteger(endNum) && startNum >= 0 && endNum >= 0) {
        let sumOfNum = 0
        if (startNum < endNum) {
            for (let i = startNum; i <= endNum; i++) {
                sumOfNum = sumOfNum + i
            }
        }
        else {
            for (let i = endNum; i <= startNum; i++) {
                sumOfNum = sumOfNum + i
            }
        }
        return sumOfNum
    }
    else {
        return "ERROR"
    }
};


// Do not edit below this line
module.exports = sumAll;
