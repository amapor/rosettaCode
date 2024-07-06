function sortOnKeys(dict) {

    var sorted = [];
    for(var key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();

    var tempDict = {};
    for(var i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }

    return tempDict;
}


function farey(n) {
  let sequence = [];
  let dict = {};

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dict[j/i] = dict[j/i] || j + "/" + i;      
    }
  }
  let sorted = sortOnKeys(dict);
  for (let fraction in sorted) {
    sequence.push(sorted[fraction])
  }

  sequence.push("1/1");
  return sequence;
}
console.log(farey(6))