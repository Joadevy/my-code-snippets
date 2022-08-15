// Two words are anagrams of each other if they both contain the same letters. For example:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

function anagrams(word, words) {
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

// Testing
anagrams('test',['helde','tets','est','tissto','estt']) // => [ 'tets', 'estt' ]
anagrams('laser', ['lazing', 'lazy',  'lacer']) // => []
