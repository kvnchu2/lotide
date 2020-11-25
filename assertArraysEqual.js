const assertArraysEqual = function(arrayOne,arrayTwo) {
  let arraysElements = [];
    for (let element = 0; element < arrayOne.length; element++) {
      if (arrayOne[element] !== arrayTwo[element]) {
        arraysElements.push(arrayOne[element]);
      }
  };

  if (arraysElements.length === arrayOne.length && arraysElements.length === arrayTwo.length) {
    console.log('🙂 Assertion Passed: ',arrayOne,' === ', arrayTwo);
  } else {
    console.log('😲 Assertion Failed: ',arrayOne,' !== ', arrayTwo);
  }
}; 


console.log(assertArraysEqual([1, 2, 3], [1, '2', 3]));


