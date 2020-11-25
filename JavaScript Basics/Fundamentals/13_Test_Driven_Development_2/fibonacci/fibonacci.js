const fibonacci = function (size) {
  let  array = [1,1];

  if (size < 0){
    return "OOPS";
  }

  for(i=2; i<size; i++){
    array[i] = array[i-2] + array[i-1];
  }
  return array[size-1];

}

module.exports = fibonacci