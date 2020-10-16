const ftoc = function(degreesF) {
  //[°C] = ([°F] − 32) × ​5⁄9
  //fahrenheit to celsius,
  let celsius = (degreesF - 32) * (5 / 9);
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
  //console.log("celsius " + celsius);
}

const ctof = function(degreesC) {
  //[°F] = [°C] × ​9⁄5 + 32
  let fahrenheit = ((degreesC * (9 / 5)) + 32);
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
  console.log("fahrenheit " + fahrenheit);
}

//Math.round(num * 10) / 10

module.exports = {
  ftoc,
  ctof
}
