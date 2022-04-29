// Script that takes an array of real numbers and returns an array with the squares of only the positive integers.

const squareList = arr => {
  // Using a reduce method to apply the conditions.
  return arr.reduce((square,number)=>{
    if (number>0 && Number.isInteger(number)){
      square.push(Math.pow(number,2))
    }
    // Returning the accum parameter in each iteration
    return square;
    // Passing the [] for initial value of the accum parameter to indicate it's an array.
  },[]);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
// This will display [25,9] because of the 5 and 3 in the array.