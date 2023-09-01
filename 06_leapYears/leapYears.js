const leapYears = function(year) {
    let isLeap = false;
     if (year % 4 == 0 || year % 400 == 0) {
        isLeap = true;
     } 
     if (year % 100 == 0 && year % 400 != 0) {
        isLeap = false;
     } 
     return isLeap;
};

console.log(leapYears(2000)); // is a leap year: returns true
console.log(leapYears(1985)); // is not a leap year: returns false

// Do not edit below this line
module.exports = leapYears;
