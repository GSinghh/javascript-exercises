const repeatString = function(word, numRepeat) {
    var tempWord = '';

    if(numRepeat < 0)
    {
        return 'ERROR';
    }
    for(var i = 0; i < numRepeat; i++)
    {
        tempWord += word;
    }

    return tempWord;
};

// Do not edit below this line
module.exports = repeatString;
