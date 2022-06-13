// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// Initial solution (looking for solve the problem)
function uniteUnique(...arr) {
  let union = [];
  // Iterating over each array of the arguments.
	for (let array of arr){
    // Iterating over each element of the argument's array.
    for (let item of array){
      // If the item isn't in the array
      if(!union.includes(item)){
        // Then push it into the union array.
        union.push(item);
      }
    }
  }
	return union
}

// Tests
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// It returns [ 1, 3, 2, 5, 4 ]
uniteUnique([1, 2, 3], [5, 2, 1])
// It returns [ 1, 2, 3, 5 ]
