export function sortArray(array) {
 // Filter the odds in an array and sort them. 
    const oddArray = array.filter(number => number % 2 !== 0).sort((a,b) => a-b);
    // Finally join with the original array replacing the order of the odd numbers.
    return array.map(number => {
        if (number % 2 !== 0){
            return oddArray.shift();
        }
        return number
    })
}
