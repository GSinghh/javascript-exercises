const getTheTitles = function(books) {
    var bookNames = [];
    for(var i = 0; i < books.length; i++)
    {
        bookNames.push(books[i].title);
    }
    return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
