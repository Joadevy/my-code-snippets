// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The parameter will be an array that represents the range.

function smallestCommons(arr){
  // Sorting to reach the max value in arr[1] && the min in arr[0]
 console.log(arr);
		arr.sort((a,b)=>{
				return a === b ? 0 : a>b ? 1 : -1
		});
console.log(arr)
  let founded= false; // Keep control if the number is founded.
  let commonMultiple = 1; // To store the different minMultiples before meet the range condition.
  let counter = 1; // To calculate the multiples.
  while (founded === false){
  // Calculating the common multiples.
    commonMultiple = arr[1] * counter;
		commonMultiple % arr[0] == 0 ? founded = true : ''
  // Once a minMultiple is founded then need to check the range condition
			if (founded){
				console.log('Probando con ' + commonMultiple);
				let notMultiple = false;
				console.log(arr[0]);
				console.log(notMultiple);
				arr.reduce((acum) => {
        while(acum<arr[1] && !notMultiple){
						console.log(acum);
						commonMultiple % acum == 0 ? '' : notMultiple = true;      
          acum++	
        }
      },arr[0]+1)
				console.log(notMultiple);
					if (!notMultiple){
						console.log('el valor  ' + commonMultiple + ' cumple la prop' );
				} else {
						founded = false;
				}
    }
    counter++
  }
  return commonMultiple
}
		
// Testing/
let array = [23,18]
smallestCommons([10,2])
		
// Hacer un ammend para editar el commit anterior.
