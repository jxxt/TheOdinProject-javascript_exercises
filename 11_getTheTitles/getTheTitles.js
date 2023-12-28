const getTheTitles = function(books) {
    let arrTitle = []
    for(let book of books) {
        arrTitle.push(book.title)
    }
    return arrTitle
};

// Do not edit below this line
module.exports = getTheTitles;
