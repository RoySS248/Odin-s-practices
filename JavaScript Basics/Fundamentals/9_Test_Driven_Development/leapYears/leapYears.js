const leapYears = function(year) {
  var leapYear = false;

  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
      leapYear = true;
    } else if (year % 100 !== 0) {
      leapYear = true;
    }
  }

  return leapYear;

}

module.exports = leapYears
