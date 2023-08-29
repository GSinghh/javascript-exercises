const removeFromArray = function(numArray, ...numDelete) {
    const newArray = [];
    numArray.forEach(element => {
        if (!numDelete.includes(element))
        {
            newArray.push(element);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
