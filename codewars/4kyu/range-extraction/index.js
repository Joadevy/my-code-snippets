function solution(list){
    return list.reduce((numbers,number,index,arr) => {
        index == 0 ? (numbers[0].push(number), numbers[1] += number) : ''
        return numbers
    },[[],""])    
}

console.log(solution([1,2,3]))