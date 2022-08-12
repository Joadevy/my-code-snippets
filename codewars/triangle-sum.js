// Given the triangle of consecutive odd numbers:
// Calculate the sum of the numbers in the nth row of this triangle
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29

function rowSumOddNumbers(n) {
  let oddNumber = 1;
  let result = 0;
  // First for loop to reach the n-th row at the triangle.
  for (let row = 1; row<=n;row++){
    // 2nd for loop to run through all the values of that row.
    for (let rowElement = 1; rowElement<=row;rowElement++){
    // If it's the correct row then acumulates the odd values of this level.
     if (row == n){
       result += oddNumber;
     }
     oddNumber+=2; // Tracks every odd number in the triangle.
    }
  }
  return result
}

// Yeah, I overengineered. The solution was actually simple like:
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

// Tests
rowSumOddNumbers(0) // => 0 (it's not a valid input anyways)
rowSumOddNumbers(1) // => 1
rowSumOddNumbers(4) // => 13 + 15 + 17 + 19 = 64 
rowSumOddNumbers(5) // => 125 
rowSumOddNumbers(42) // => 74088
