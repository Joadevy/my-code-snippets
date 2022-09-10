export function solution(list){
    return list.reduce((numbers,number,index,arr)=>{
            if (number === arr[index+1]-1){
                numbers[0].push(number);
            } else if (numbers[0].length>1){
                numbers[0].push(number)
                numbers[1].length ? numbers[1]+=`,${doRange(numbers[0])}` : numbers[1]+=`${doRange(numbers[0])}`;
                numbers[0] = [];
            } else if (numbers[0].length){
                numbers[0].push(number);
                numbers[1].length ? numbers[1]+=`,${numbers[0].join(',')}` : numbers[1]+=`${numbers[0].join(',')}`
                numbers[0] = [];
            } else {
                numbers[1].length ? numbers[1]+=`,${number}` : numbers[1]+=`${number}` 
            }
        return numbers
    },[[],''])[1]
}

function doRange(arr){
    return`${arr[0]}-${arr[arr.length-1]}` 
}

console.log(solution([]))