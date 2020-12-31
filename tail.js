const tail = function(array) {
  let tailElements = array.slice(1,array.length);
  return tailElements;
};

module.exports = tail;