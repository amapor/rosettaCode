function entropy(s) {
  let dict = {}
  let entropy = 0;
  
  for (let i = 0; i < s.length; i++) {
    dict[s.charAt(i)] = dict[s.charAt(i)] + 1 || 1;
  }
  for (let number in dict) {
    let prob = dict[number] / s.length;
    entropy += prob * Math.log2(prob);
  }  
  return -entropy;
}

function fibWord(n) {
  let word1 = "1";
  let word2 = "0";
  let wordn = "1";
  let words = [];
  let object1 = {N:1, Length:1, Entropy:0, Word: "1"};
  let object2 = {N:2, Length:1, Entropy:0, Word: "0"};
  words.push(object1,object2);

  for (let i = 3; i <= n; i++) {
    
    let object = {N:0, Length:0, Entropy:0, Word: ""}
    wordn = word2 + word1;
    object.N = i;
    object.Length = wordn.length;
    object.Entropy = Math.round(entropy(wordn) * 100000000) / 100000000;
    object.Word = wordn;
    words.push(object);
    word1 = word2;
    word2 = wordn;
  }

  return words;
}

console.log(fibWord(5));