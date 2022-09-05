export function topThreeWords(text) {
    let top = [];
    // Taking the words from the string in an array abd returning the words counted in an object.
    const wordsCounted = text
    .split(/[^A-Za-z']/gi)
    .filter(word => word !== '' && word !== "'")
    .map(word => word.toLowerCase())
    .reduce((count,word) => {
        if (!count[word]) {
            count[word] = 0
        }
        
        count[word]++
        return count
    },{});
    
    for (const word in wordsCounted){
      // Checking and sorting the first three to enter.
        if(!top[0]){
            top.push(word)
        } else if (!top[1]){
            wordsCounted[word] > wordsCounted[top[0]] ? (changeOrder(top,0),top[0] = word) : top.push(word)
        } else if (!top[2]){
            wordsCounted[word] > wordsCounted[top[0]] ? (changeOrder(top,0),top[0] = word) :
            wordsCounted[word] > wordsCounted[top[1]] ? (changeOrder(top,1),top[1] = word) : top.push(word) 
        }
        else if (wordsCounted[word] > wordsCounted[top[0]]) { changeOrder(top,0); top[0] = word } 
        else if (wordsCounted[word] > wordsCounted[top[1]]) { changeOrder(top,1); top[1] = word } 
        else if (wordsCounted[word] > wordsCounted[top[2]]) top[2] = word
    }
    
    return top
}

// Moves the top aray one position to the right.
const changeOrder = (arr,pos) => {
        let aux;
        aux = arr[pos+1]; 
        arr[pos+1] = arr[pos]; 
        if (pos == 0 && arr.length > 2) arr[pos+2] = aux;
}
