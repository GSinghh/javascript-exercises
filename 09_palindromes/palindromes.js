const palindromes = function (string) {
    //Check whether a value is a palindrome
    const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") == processedString;
};
// Do not edit below this line
module.exports = palindromes;
