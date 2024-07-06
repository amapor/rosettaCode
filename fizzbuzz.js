function fizzBuzz() {
 
  let results = [];

  for (let i = 1; i <= 100; i++) {
    let number;
    if (i%3 == 0 && i%5 == 0) {
        number = "FizzBuzz"
        results.push(number);
      } else if (i%3 == 0) {
        number = "Fizz";
        results.push(number);
      } else if (i%5 == 0) {
        number = "Buzz";
        results.push(number);
      } else {
      number = i;
      results.push(number);
    }
    
  }
  return results;
}

console.log(fizzBuzz())