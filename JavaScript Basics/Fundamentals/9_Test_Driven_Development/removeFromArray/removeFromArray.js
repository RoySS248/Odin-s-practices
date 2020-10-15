const removeFromArray = function(array, ...charForRemove) {

  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < charForRemove.length; j++) {

      if (array[i] === charForRemove[j]) {
        array.splice(i, 1);
        i--;
      }

    }
  }
  return array;

}

module.exports = removeFromArray
