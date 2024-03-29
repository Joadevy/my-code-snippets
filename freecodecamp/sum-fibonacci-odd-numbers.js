// Sum all Odd Fibonacci Numbers: Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
/* The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8. */

// First solution (looking for solve the problem)
function untilFibonacci(number){
  if (number <= 0) return 0; // In case that the argument is <= 0
  let fiboArray = [1,1] // Initial 2-tuple to do the fibonacci's sequence
  let fiboNumber = 0; // It'll store each fibo-number in the sequence.
  let oddFibonacciSummation = 0;
  for (let start = 1; fiboArray[0]+fiboArray[1]<=number;start++){
    fiboNumber = fiboArray[0]+fiboArray[1];
    if (fiboNumber % 2 !== 0){
      oddFibonacciSummation+= fiboNumber;
    }
    // Updates the fibonacci's sequence.
    fiboArray = [fiboArray[1],fiboArray[1]+=fiboArray[0]];
  }
  return (oddFibonacciSummation+2) // +2 is to add the starting 1,1 elements (both meet the condition)
}

// Testing
untilFibonacci(1)
// It returns 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// Another possibility, same result but more readable
function sumFibs(num) {
  // Numbers to start the fibo sum
  let prevNumber = 0;
  let currNumber = 1;
  // Variable to store the odd's fibo summation
  let result = 0;
  while (currNumber <= num) {
    // Checks if the fibo's number is an odd.
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    // Updates the fibo sequence.
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}


