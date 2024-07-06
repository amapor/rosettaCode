function fib_luc(n, len, w) {
  let first = 0;
  let second = 0;
  let sum = 0;
  let array = [];

  // logic to initiate parameters based on seq type
  if (w == "f") {
    first = 1;
    second = 1;
  } else if (w == "l") {
    first = 2;
    second = 1;
  } else {
    console.log("The w parameter is invalid")
  }
  
  let sequence = [first, second];
  /*----------------------------------*/

  for (let i = 2; i < len; i++) {
    if (sequence.length < n) {
      sum = sequence.reduce((a, b) => a + b, 0);
      sequence.push(sum);
    } else {
      array = sequence.slice(sequence.length-n);
      sum = array.reduce((a, b) => a + b, 0);
      sequence.push(sum);
    }  
  }

  return sequence;
}

console.log(fib_luc(4,15,"l"))