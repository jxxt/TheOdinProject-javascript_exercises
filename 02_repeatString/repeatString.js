const repeatString = function (word, times) {
    outputString = "";
    if (+times < 0) {
        return "ERROR";
    }
    else {
        for (let i = 0; i < +times; i++) {
            outputString += word;
        }
        return outputString;
    }
};

// Do not edit below this line
module.exports = repeatString;
