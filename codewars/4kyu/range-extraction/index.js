function solution(list){
    return list.reduce((numbers,number,index,arr) => {
        if (numbers[0].length === 0){
            console.log('pusheo',number)
            numbers[0].push(number);
        } else if (numbers[0]){
            arr[index-1] === number-1 ?  
                (numbers[0].push(number),
                index == arr.length-1 && numbers[0].length > 2 ? numbers[1] += doRange(numbers[0]) : '') : 
                // Estaria en [1,2,3,5,6] situacion, es decir hay un corte.
                numbers[0].length > 2 ? (numbers[1] += doRange(numbers[0]), numbers[0] = []) :
                // Devuelvo el rango SOLO SI HAY UN CORTE pero necesito volver a analizar
                 (numbers[1] += (numbers[0].toString()), 
                 numbers[0] = []);
        } 
        else {
            `${numbers[1]},${number}`
        }
        return numbers
    },[[],""])    
}

function doRange(arr){
    return`${arr[0]}-${arr[arr.length-1]}` 
}

console.log(solution([1,2,3,4,5,6,7,8,9,11,12]))