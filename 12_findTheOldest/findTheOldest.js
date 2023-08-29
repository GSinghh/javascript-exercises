const findTheOldest = function(people) {
    var oldestAge = Number.MIN_SAFE_INTEGER;
    var oldestPerson;
    for(const person of people)
    {
        if('yearOfDeath' in person)
        {
            var tempAge = person.yearOfDeath - person.yearOfBirth;
            if(tempAge > oldestAge)
            {
                oldestAge = tempAge;
                oldestPerson = person;
            }
        }
        else
        {
            const currentDate = new Date();
            var tempAge = currentDate.getFullYear() - person.yearOfBirth;
            if(tempAge > oldestAge)
            {
                oldestAge = tempAge;
                oldestPerson = person;
            }
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
