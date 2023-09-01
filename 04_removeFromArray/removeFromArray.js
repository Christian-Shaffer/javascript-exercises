const removeFromArray = function(array, ...value) {
    for (let i = 0; i < value.length; i++) {
        if (array.includes(value[i])) {
            array.splice(array.indexOf(value[i]), 1);
        }
    }
    return array;
}

removeFromArray(['dog', 'cat', 1], 'dog', 1);

// Do not edit below this line
module.exports = removeFromArray;
