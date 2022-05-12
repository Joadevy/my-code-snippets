// The functon receives two numbers in an array, then return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
 const range = arr.reduce((data,number)=>{
    data.min>number ? data.min = number : '';
    data.max<number ? data.max = number : '';
   return data;
  },{min:arr[0],max:arr[0]});
  
  let plusBetween = 0;
  
  for (let number =range.min;number<=range.max;number++){
    plusBetween+=number;
  }
  return plusBetween;
}

console.log('Final result: ',sumAll([1, 2]));

// An easier or more readable soluton would look like:

function sumAll(arr){
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let number = min;number<=max;number++){
    sumBetween+=number;
  }
  return sumBetween;
}
