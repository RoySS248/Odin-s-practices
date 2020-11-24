const palindromes = function(word) {
  newWord = word.toLowerCase().replace(/[^A-Za-z]/g, "");
  arrayWord = newWord.split("")
  arrayWord = arrayWord.reverse();
  if(arrayWord.join("") == newWord){
    return true;
  }else{
    return false;
  }

};

module.exports = palindromes;
