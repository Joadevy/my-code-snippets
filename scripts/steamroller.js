// Flatten a nested array. e.g. [[["a"]], [["b"]]] must return ["a", "b"]

function steamrollArray(arr){
		return arr.reduce((result,element)=> {
				if (Array.isArray(element)) {
					return result.concat(steamrollArray(element))
				} else {
						result.push(element)	
				}
				return result
		},[]);
}

console.log(steamrollArray([1, {}, [3, [[4]]]])) 
