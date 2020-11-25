const without = function(sourceArray,itemsToRemove) {
  let arraysElements = [];
  for (let x = 0; x < sourceArray.length; x++) {
    if (itemsToRemove.indexOf(sourceArray[x]) === -1){
      arraysElements.push(sourceArray[x]);
    }
  }
  return arraysElements;
}


console.log(without(["1", "2", "3"], [1, 2, "3"]));


