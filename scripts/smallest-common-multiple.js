// Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
// as well as by all sequential numbers in the range between these parameters. The parameter will be an array that represents the range.

// ***** First solution, looking to solve the problem *****
 
function smallestCommons(arr){
  // Sorting to reach the max value in arr[1] && the min in arr[0]
  arr.sort((a,b)=>{
   return a === b ? 0 : a>b ? 1 : -1
  });
  let founded= false; // Keep control if the number is founded.
  let commonMultiple = 1; // To store the different multiples before meet the range condition.
  let counter = 1; // To calculate the multiples.
  while (founded === false){
  // Calculating the common multiples.
    commonMultiple = arr[1] * counter;
    commonMultiple % arr[0] == 0 ? founded = true : ''
  // Once a minMultiple is founded then need to check the range condition
     	if (founded){
	   let notMultiple = false; // Flag to track the multiples in the range.
	   arr.reduce((acum) => {
           while(acum<arr[1] && !notMultiple){
		commonMultiple % acum == 0 ? '' : notMultiple = true;      
          acum++	
        }
      },arr[0]+1)
	if (notMultiple){
	   founded = false; // To do the while loop again and search for a new commonMultiple 
	}
    }
    counter++ // Increments the commonMultiple's factor.
  }
  return commonMultiple
}
		
// Testing
smallestCommons([10,2])
// Returns 2520 cause it's the min value that met the condition.

// **** Another aproach to solve the problem *****

function smallestsCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

// Testing
smallestsCommons([1, 5]);
// It returns 60 
