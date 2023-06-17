const removeFromArray = function (arr, ...manyNum) {
    newArr = arr.filter((element) => !manyNum.includes(element));
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
