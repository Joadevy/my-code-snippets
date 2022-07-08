// Flatten a nested array. e.g. [[["a"]], [["b"]]] must return ["a", "b"]

// First approach to solve the problem
function steamrollArray(arr){
		return arr.reduce((result,element)=> {
				// Checking if the element is an array.
				if (Array.isArray(element)) {
						// Uses recursion to go deep and concatenates the output to the reduce acumulator (result)
					return result.concat(steamrollArray(element))
				} else {
						// If the element is not an array, it pushes into the reduce's acumulator.
						result.push(element)	
				}
				return result
		},[]);
}

// Testing
console.log(steamrollArray([1, {}, [3, [[4]]]])) 
// It returns [1,{},3,4]
