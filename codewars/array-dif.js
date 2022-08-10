// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order. If a value is present in b, all of its occurrences must be removed from the other:

function arrayDiff(a, b) {
  				// The filter condition mustn't have an if statement because if b has 0 or is an empty [] (they're falsy values) it won't work.
  return a.filter(element => !b.includes(element));
}

// Testing
arrayDiff([1,2],[1]) // => [2]
arrayDiff([-3,10,-5,0,-11,3,-4,-6,-7,8,-15,-19],[-3,8]) // => [ 10, -5, 0, -11, 3, -4, -6, -7, -15, -19 ]
arrayDiff([1,2],[]) // => [1,2]
