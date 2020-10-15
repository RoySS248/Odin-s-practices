const sumAll = function(num1, num2) {
  let sumAll = 0;
  let sumAux = 0;
  let numMax = 0;
  let numMin = 0;

  if (((typeof num1 !== "number") || (typeof num2 !== "number")) ||
    ((num1 < 0) || (num2 < 0))) {
    return sumAll = "ERROR";

  } else {
    sumAll = num1 + num2;

    if (num1 === num2) {
      return sum;

    } else if (num1 > num2) {
      numMax = num1;
      numMin = num2;

    } else if (num2 > num1) {
      numMax = num2;
      numMin = num1;
    }

    while (numMin <= numMax) {
      sumAux += numMin;
      numMin++;
    }
    sumAll = sumAux;
  }

  return sumAll;
}

module.exports = sumAll
