// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The parameter will be an array that represents the range.

function smallestCommons(arr){
  // Sorting to reach the max value in arr[1] && the min in arr[0]
  arr.sort()
  let founded= false; // Keep control if the number is founded.
  let minMultiple = 1; // To calculate
  let counter = 1;
  while (founded === false){
    console.log('Este es el acum: '+ minMultiple)
    minMultiple = arr[1] * counter;
    minMultiple % arr[0] == 0 ? founded = true : ''
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
  return minMultiple
}

let array = [2,6]
smallestCommons(array)