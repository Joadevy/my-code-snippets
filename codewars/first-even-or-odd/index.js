// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
let buffer = [];
  // Analyze the first three (required by default) elements of the integers and push true if the integer is an odd number.
  for (let i=0;i<3;i++){
    integers[i] % 2 == 0 ? buffer.push(true) : buffer.push(false);
  }
  
  // Take the amount of odds in the first three elements of the array.
const amountOdd = buffer.reduce((acum,odd) => {
    odd == true ? acum++ : '';
    return acum
  },0);
  
  // If there are 0 or 1 odds in the first three elements, then find & return the first odd because it's the N "outlier"
if (amountOdd === 0 || amountOdd === 1){
  return integers.find(number => number % 2 == 0)
} 
  // If execute this, then they need to return the first even number of the array.
  return integers.find(number => number % 2 !== 0);
}

// Testing
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); // => 11
findOutlier([160, 3, 1719, 19, 11, 13, -21]); // => 160

// Tests proposed by codewars
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(findOutlier([0, 1, 2]), 1)
//     Test.assertEquals(findOutlier([1, 2, 3]), 2)
//     Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
//     Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
//     Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
//   });
// });
