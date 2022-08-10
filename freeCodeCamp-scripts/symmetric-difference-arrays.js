// Compare two arrays and return a new array with any items only found in one of the two given arrays.

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
  	.filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5]));

// This test return => [ 7, 4] because 7 it's only contained in arr1 and 4 it's only contained in arr2.