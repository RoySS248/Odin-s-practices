const reverseString = function(string) {
  let newString = [];
  let i = string.length;

  while(i > 0){
    newString += string.charAt(i-1);
    i--;
  }

  return newString.toString();

}

module.exports = reverseString
