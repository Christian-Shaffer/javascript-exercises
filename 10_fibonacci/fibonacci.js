const fibonacci = function(fibIndex) {
    let values = [1];
    let previousValue = 1;
    if (fibIndex > 0) {
        for (let i = 0; i <= fibIndex; i++) {
            console.log(i, previousValue);
            values.push(previousValue);
            previousValue += values[i];
        }
        return values[fibIndex - 1];
    }
    else {
        return "OOPS";
    }
};

console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
