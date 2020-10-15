const repeatString = function(string, numRepeting) {
  let newString = "";
  i = 0;

  if (numRepeting >= 0) {

    while (i < numRepeting) {
      newString += string;
      i++
    }

  } else {
    newString = "ERROR";
  }

  return newString;
}

module.exports = repeatString
