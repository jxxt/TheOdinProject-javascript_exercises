const reverseString = function (enteredString) {
    newString = ""
    stringLength = enteredString.length
    for (let i = stringLength - 1; i >= 0; i--) {
        newString += enteredString.charAt(i)
    }
    return newString
};

// Do not edit below this line
module.exports = reverseString;
