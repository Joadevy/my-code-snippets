// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The parameter will be an array that represents the range.

function smallestCommons(arr){
  // Sorting to reach the max value in arr[1] && the min in arr[0]
  arr.sort()
  let founded= false; // Keep control if the number is founded.
  let commonMultiple = 1; // To store the different minMultiples before meet the range condition.
  let counter = 1; // To calculate the multiples.
  while (founded === false){
    console.log('Este es el acum: '+ commonMultiple)
  // Calculating the common multiples.
    commonMultiple = arr[1] * counter;
    commonMultiple % arr[0] == 0 ? founded = true : ''
  // Once a minMultiple is founded then need to check the range condition
    if (founded){
      arr.reduce((acum) => {
        while(acum<arr[1]){
          console.log(acum)
          acum++
        }
      },arr[0]+1)
    }
    counter++
  }
  return commonMultiple
}

// Testing
let array = [2,6]
smallestCommons(array)

// Hacer un ammend para editar el commit anterior.
