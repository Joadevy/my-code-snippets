export function findOutlier(integers){
let buffer = [];
  // Analyze the first three (required by default) elements of the integers and push true if the integer is an odd number.
  for (let i=0;i<3;i++){
    integers[i] % 2 == 0 ? buffer.push(true) : buffer.push(false);
  }
  
  // Take the amount of odds in the first three elements of the array.
const amountOdd = buffer.reduce((acum,odd) => {
    odd == true ? acum++ : '';
    return acum
  },0);
  
  // If there are 0 or 1 odds in the first three elements, then find & return the first odd because it's the N "outlier"
if (amountOdd === 0 || amountOdd === 1){
  return integers.find(number => number % 2 == 0)
} 
  // If execute this, then they need to return the first even number of the array.
  return integers.find(number => number % 2 !== 0);
}
