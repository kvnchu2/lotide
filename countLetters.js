const countLetters = function(str) {
  let strObj = {};
  let newStr = str.split('').sort().join('').trim('');
  console.log(newStr);
  let current = newStr[0];
  let count = 0;

  for (let x = 0; x < newStr.length; x++) {
    if (newStr[x] !== current) {
      current = newStr[x];

    } else if (newStr[x] === current) {
      count++;
      strObj[newStr[x]] = count;
    }
  }

  return strObj;
}

console.log(countLetters('LH L'))