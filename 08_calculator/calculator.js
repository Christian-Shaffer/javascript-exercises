const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((total, element) => total + element, 0);
};

const multiply = function(array) {
  let total = 1; 
  for (let i = 0; i < array.length; i++) {
    total *= array[i];
  }
  return total;
};

const power = function(baseNum, exponent) {
	return Math.pow(baseNum, exponent);
};

const factorial = function(num) {
  let value = 1;
	for (let i = num; i > 0; i--) {
    value *= i;
  }
  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
