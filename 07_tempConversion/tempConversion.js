const convertToCelsius = function (fTemp) {
  convertedCTemp = (((fTemp - 32) * 5) / 9)
  if (Number.isInteger(convertedCTemp)) {
    return +convertedCTemp
  }
  return +convertedCTemp.toFixed(1)
};

const convertToFahrenheit = function (cTemp) {
  convertedFTemp = (((cTemp * 9) / 5) + 32)
  if (Number.isInteger(convertedFTemp)) {
    return +convertedFTemp
  }
  return +convertedFTemp.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
