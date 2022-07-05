// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// *** First solution, looking to solve the problem ***

function dropElements(arr, func) {
// While there are something in the array and the func with the first element returns false.
  while(!func(arr[0]) && arr.length){
    // Removes the first element of the array.
   	arr.shift()
  }
  return arr
}

// Testing
dropElements([0,1,0,1], function(n) {return n === 1; });
// It returns [1,0,1] because 1 === 1 returns true && the function stops.

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
// It returns [3,9,2] cause 3>2 returns true && the function stops.
