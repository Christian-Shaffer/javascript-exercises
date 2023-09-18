const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const getAge = function(person) {
    return person.yearOfDeath - person.yearOfBirth;
};

const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldestSoFar, currentPerson) => {
        if (oldestSoFar === null) {
            return currentPerson;
        }
        const currentPersonAge = getAge(currentPerson);
        const oldestSoFarAge = getAge(oldestSoFar);
        if (currentPersonAge > oldestSoFarAge) {
            return currentPerson;
        } else {
            return oldestSoFar;
        }
    }, null);
    return oldestPerson ? oldestPerson.name : 'No data available';
}; 

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;

