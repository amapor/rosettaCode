function isSelfDescribing(n) {
  let result = false;
  let numArray = Array.from(n.toString()).map(Number);
  let map = {'0': 0, '1':0, '2':0, '3':0, '4':0, '5':0, '6':0, '7':0, '8':0, '9':0};

  // create map with each number as keys and the times they appear as values
  for (let num of numArray) {
      map[num] = map[num] + 1;
  }

  for (const [i, value] of numArray.entries()) {
    if (value != map[i]) {
      break
    } else {
      result = true;
    }
  }
  return result;
}

console.log(isSelfDescribing(32211110))