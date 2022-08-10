/* -------- Sum All Primes -------- 
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. The function sumPrimes returns the sum of all prime numbers that are less than or equal to num. */

// First solution (looking for solve the problem)
function sumPrimes(num) {
  let sum = 0;
  let start;
  if (num >= 0){
  	for(let start = 2; start<=num;start++){
      isPrime(start) === true ? sum += start : ''; 
    }
    return sum
	}
  return "It's only valid for positive numbers!"
}

function isPrime(num){
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) // Then it's not a prime number
      return false;
  }
  return true;
}

// Testing
sumPrimes(10);
// It returns 17 cause 2+3+5+7.
