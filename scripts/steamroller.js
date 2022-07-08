// Flatten a nested array. e.g. [[["a"]], [["b"]]] must return ["a", "b"]

function steamrollArray(arr){
		return arr.reduce((result,element)=> {
				if (Array.isArray(element)) {
						console.log(element)
						return result
				} else {
						result.push(element)	
				}
				return result
		},[]);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

