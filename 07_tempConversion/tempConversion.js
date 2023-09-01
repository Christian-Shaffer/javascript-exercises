const convertToCelsius = function(tempinF) {
  let converted = (5/9 * (tempinF - 32)).toFixed(1);
  converted = Math.round(converted * 10) / 10;
  return converted;
};

const convertToFahrenheit = function(tempInC) {
  let converted = (tempInC * 9/5 + 32).toFixed(1);
  converted = Math.round(converted * 10) / 10;
  return converted;
};


console.log(convertToCelsius(32)); // fahrenheit to celsius, should return 0
console.log(convertToFahrenheit(0)); // celsius to fahrenheit, should return 32
console.log(convertToFahrenheit(42));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
