function factors(num) {
  let factors = [];
  let result = 0;
  for (let i=1; i <= num; i++) {
    result = num % i;
    if (result == 0) {
      factors.push(i);
    }
  }
  return factors;

}

console.log(factors(64));