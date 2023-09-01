const sumAll = function(value1, value2) {
    let startNum = 0;
    let endNum = 0;

    if (value1 < 0 || value2 < 0 || !Number.isInteger(value1) || !Number.isInteger(value2)) {
        return 'ERROR';
    } 
    if (value2 > value1) {
        startNum = value1;
        endNum = value2;
    } else {
        startNum = value2;
        endNum = value1;
    }
    let total = 0;
    for (let i = startNum; i <= endNum; i++) {
        total += i;
    }
    return total;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
