const eqArrays = function(arrayOne,arrayTwo) {
  //stores all the true and false values to be searched at the end 
  let binaryArr = [];
  //checks to see if the length of the two arrays are equal
  if(arrayOne.length !== arrayTwo.length) {
    return false;
  }
  //checks to see if corresponding index element of arrayOne and arrayTwo are equal
  for (let element = 0; element < arrayOne.length; element++) {
    if (Array.isArray(arrayOne[element]) && Array.isArray(arrayTwo[element])) {
      binaryArr.push(eqArrays(arrayOne[element], arrayTwo[element]))
    } else if (arrayOne[element] !== arrayTwo[element]) {
      return false;
    } else if (typeof arrayOne[element] !== typeof arrayTwo[element]) {
      return false;
    }
  }

  if (binaryArr.indexOf(false) >= 0) {
    return false;
  } else {
    return true;
  }
};



module.exports = eqArrays;