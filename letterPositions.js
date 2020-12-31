const letterPositions = function(sentence) {
  const results = {};
    for (let x = 0; x < sentence.length; x++) {
      if (results[sentence[x]] === undefined && sentence[x] !== ' ') {
        results[sentence[x]] = [];
        results[sentence[x]].push(x);
      } else if (sentence[x] !== ' ') {
        results[sentence[x]].push(x);
      }
    }
    return results;
  }

module.exports = { letterPositions };
