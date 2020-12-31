const flatten = function(array) {
  let flattenedArray = [];
  for (let element = 0; element < array.length; element++) {
    if (Array.isArray(array[element])) {
      for (let element2 = 0; element2 < array[element].length; element2++) {
        flattenedArray.push(array[element][element2]);
      }
    } else {
      flattenedArray.push(array[element]);
    }

  }

  return flattenedArray;
}


module.exports = { flatten };