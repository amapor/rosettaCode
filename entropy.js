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

console.log(entropy("0123456789abcdef"))
