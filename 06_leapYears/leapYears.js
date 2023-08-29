const leapYears = function(year) {
    //leap years are all divisible by 4
    //Are not divisible by 100 unless they are divisible by 400
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

};

// Do not edit below this line
module.exports = leapYears;
