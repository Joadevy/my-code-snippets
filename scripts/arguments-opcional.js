// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// First iteration, looking for solve the problem.
function addTogether(...args) {
  if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number'){
  	return args.reduce ((sum,number) => {	
      return sum+=number
    },0)
  } else if(args.length == 1 && typeof args[0] === 'number'){
  	return function(secondNumber){
    	return addTogether(args[0],secondNumber)
  	}
  }
  return undefined
}

// Testing
addTogether(2)(3);
// Returns 5, the first time it returns the function waiting for a second argument and then calls the addTogether when it receives the second number.