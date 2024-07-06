function fib_luc(len) {
  let previous1 = 2;
  let previous2 = 1;
  let next = 0;
  let sequence = [previous2, previous1];
    for (let i = 2; i < len; i++) {
      next = previous1 + previous2;
      sequence.push(next);
      previous2 = previous1;
      previous1 = next;  
    }

  return sequence;
}

console.log(fib_luc(2, 8, "f"))