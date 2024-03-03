const convertToCelsius = function(givenTemp) {
  let convereted = parseFloat((givenTemp-32)*5/9).toFixed(1);
  return parseFloat(convereted);
};

const convertToFahrenheit = function(givenTemp) {
  let convereted = parseFloat((givenTemp*1.8)+32).toFixed(1);
  return parseFloat(convereted);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
