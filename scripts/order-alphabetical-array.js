// Sort an array alphabetically using the JS default method with the callback.

function alphabeticalOrder(arr) {
    // Using a sort with a compareFunction().
  return arr.sort((a,b)=>{
    // The return is really important so as to iterate comparing each of the arrays items.
    return a === b ? 0 : a>b ? 1 : -1
  })
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
// This returns [ 'a', 'a', 'c', 'd', 'g', 'z' ]

// Note: the sort() callback function compares by pairs (a,b) and does the sort using the return value of each iteration, if this value is greater than 0 so it puts the b before the a. If the returned value is 0, the array will remain unchanged.