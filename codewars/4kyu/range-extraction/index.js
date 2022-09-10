export function solution(list){
    return list.reduce((numbers,number,index,arr)=>{
        // Checking if actual number and the next one are consecutives.
            if (number === arr[index+1]-1){
                numbers[0].push(number);
            } else if (numbers[0].length>1){
                // First pushes the actual element because of the condition stops for the next one.
                numbers[0].push(number) 
                // Then compare because of the ,separator between range and numbers in the ouput string.
                numbers[1].length ? numbers[1]+=`,${doRange(numbers[0])}` : numbers[1]+=`${doRange(numbers[0])}`;
                // Updates the posible-range acumulator.
                numbers[0] = [];
            } else if (numbers[0].length){ // If there'll be only two numbers in the acumulator (not enough for a range)
                numbers[0].push(number); // Pushes the second number because of the same than above.
                numbers[1].length ? numbers[1]+=`,${numbers[0].join(',')}` : numbers[1]+=`${numbers[0].join(',')}`
                numbers[0] = [];
            }  else { // If there are no values in the acumulator.
                numbers[1].length ? numbers[1]+=`,${number}` : numbers[1]+=`${number}` 
            }
        return numbers
    },[[],''])[1]
}

function doRange(arr){
    return`${arr[0]}-${arr[arr.length-1]}` 
}
