function solution(list){
    return list.reduce((numbers,number,index,arr) => {
        if (!index){
            arr[index+1] == number+1 ? numbers[0].push(number) : numbers[1] += number;
        } else if (numbers[0]){
            arr[index+1] === number+1 && arr[index-1] === number-1 ?  
                numbers[0].push(number) : 
                // Estaria en [1,2,3,5,6] situacion
                // numbers[1] += doRange(numbers[0]) // Deberia devolver el 1-3
                number == numbers[0][number.length]+1 ? numbers[0].push(number) :
                (numbers[1] += (numbers[0].toString()) + ',' + number, numbers[0] = [])
        } else {
            numbers[1] += ',' + number
        }
        return numbers
    },[[],""])    
}

[1,2,3]
[1,2,4,5]

function doRange(arr){
    return`${arr[0]}-${arr[arr.length-1]}` 
}

console.log(solution([1,2,3,4,5,6,9]))