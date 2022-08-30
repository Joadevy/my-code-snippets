export function anagrams(word, words) {
  return words.reduce((list,wordInList) =>{
    // Creates a mutable version of the given word.
    let wordMutable = word;
    
    // Analizes every letter of each word in the list.
    for (let letter of wordInList){
      // Replaces the match between the letters in the mutable word
      wordMutable = wordMutable.replace(letter,'');
    }
    // Comparing by empty (if all the letters were founded) and the length of two words (avoid the '' case)
    (wordMutable == '' && word.length == wordInList.length) ? list.push(wordInList) : '';
    return list
  },[])
}
