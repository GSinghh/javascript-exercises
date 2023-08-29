const convertToCelsius = function(numberFah) {
  return Math.round((numberFah - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(numberCel) {
  return Math.round(((numberCel * (9/5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
