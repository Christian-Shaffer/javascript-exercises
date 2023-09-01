const repeatString = function(stringToRepeat, timesRepeated) {
    let repeaterContainer = [];
    if (timesRepeated < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < timesRepeated; i++) {
        repeaterContainer.push(stringToRepeat);
    }
    const finalRepeated = repeaterContainer.join("");
    return finalRepeated;
};

// Do not edit below this line
module.exports = repeatString;
