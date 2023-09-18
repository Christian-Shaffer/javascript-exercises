const palindromes = function (phrase) {
    let newString = "";
    let cleanedPhrase = phrase.toLowerCase();
    for (let i = cleanedPhrase.length - 1; i >= 0; i--) {
        if (cleanedPhrase[i] != ',' && cleanedPhrase[i] != '.' && cleanedPhrase[i] != " ") {
            newString += cleanedPhrase[i];
        }
    }

    let originalString = "";
    for (let i = 0; i < cleanedPhrase.length; i++) {
        if (cleanedPhrase[i] != ',' && cleanedPhrase[i] != '.' && cleanedPhrase[i] != " ") {
            originalString += cleanedPhrase[i];
        }
    }

    return newString === originalString;
};

console.log(palindromes('A nut for a jar of tuna.'));  // Should print true
console.log(palindromes('Not a palindrome'));  // Should print false

// Do not edit below this line
module.exports = palindromes;
