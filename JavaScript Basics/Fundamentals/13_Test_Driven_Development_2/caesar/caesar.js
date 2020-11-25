const caesar = function (string, num) {

  let array = Array.from(string);
  let newArray = array.map(function (char) {
    let codeChar = char.charCodeAt(0);
    let sign = num >= 0 ? 1 : -1;

    if ((char.charCodeAt(0) >= 65) && (char.charCodeAt(0) <= 90)) {
      
      for (let i = 1; i < (num * sign) + 1; i++) {
        codeChar = codeChar + (1 * sign);
        if ((codeChar > 90)) {
          codeChar = 65;
        } else if ((codeChar < 65)) {
          codeChar = 90;
        }
      }
      return (String.fromCharCode(codeChar));

    } else if ((char.charCodeAt(0) >= 97) && (char.charCodeAt(0) <= 122)) {
      for (let i = 1; i < (num * sign) + 1; i++) {
        codeChar = codeChar + (1 * sign);
        if ((codeChar > 122)) {
          codeChar = 97;
        } else if ((codeChar < 97)) {
          codeChar = 122;
        }
      }
      return (String.fromCharCode(codeChar));

    } else {

      return (char);
    }
  });
  
  return newArray.join("");
}
//String.fromCharCode(num1, ..., numN) 

module.exports = caesar