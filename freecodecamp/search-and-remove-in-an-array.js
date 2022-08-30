// It will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. The function needs to remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  let elementsToRemove =[];
  // Saving the elements to remove that were passed as arguments
  for (let argument in arguments){
    argument>0 ? elementsToRemove.push(arguments[argument]) : '';
  }
  return [...arguments[0]].filter(element => !(elementsToRemove.includes(element)));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// It returns [1,1] because 2,3 are removed from the array passed.

// Another simpler & more readable solution for this problem would be:
function destroyer(arr, ...valsToRemove) {
  return arr.filter(elem => !valsToRemove.includes(elem));
}

