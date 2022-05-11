function sumAll(arr) {
  const plusBoth = arr.reduce((acum,number) => {
    return acum +=number;
  },0);
  let min,max;
  if (arr[0]>arr[1]){
    min = arr[1];
    max = arr[0];
  } else {
    min = arr[0];
    max = arr[1];
  }
  let plusBetween = 0;
  for (let min; min<max;min++){
    plusBetween+=min;
  }
  return plusBetween+plusBoth
}

console.log(sumAll([4, 1]));
