const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArray) {
	var total = 0;
  arrayLen = numArray.length;
  for(var i = 0; i < arrayLen; i++)
  {
    total += numArray[i];
  }
  return total;
};

const multiply = function(numArray) {
  var total = 1;
  for(var i = 0; i < numArray.length; i++)
  {
    total *= numArray[i];
  }
  return total;
};

const power = function(num, power) {
  return num ** power;
};

const factorial = function(number) {
  var total = 1;
  for(var i = 1; i <= number; i++)
  {
    total *= i;
  }
  return total;
	
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
