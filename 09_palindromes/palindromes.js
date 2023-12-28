const palindromes = function (string) {
    let punctuation = ["!", ",", ".", " "]
    let newString = string.toLowerCase()
    for (let i = 0; i < punctuation.length; i++) {
        newString = newString.replaceAll(punctuation[i], "")
    }
    console.log(newString)
    let charArr = newString.split("")
    console.log(charArr)
    let revArr = charArr.reverse()
    console.log(revArr)
    let revString = revArr.join("")
    console.log(revString)
    return (revString == newString)
};

// Do not edit below this line
module.exports = palindromes;