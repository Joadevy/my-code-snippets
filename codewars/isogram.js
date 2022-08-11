// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
  //  Reduce initializes with an array acumulator that tracks the letters and the isogram status. 
  return str.split('').reduce((acum,letter) => {
    // Converts to uppercase to ignore the cases.
    if (acum[0].includes(letter.toUpperCase())){
      acum[1] = false;
    } else {
      acum[0].push(letter.toUpperCase());
    }
    return acum;
  },[[],true])[1] // returns the boolean result of the reduce statement.
}

// Tests
isIsogram("aba"); // => false
isIsogram(""); // => true
isIsogram("Dermatoglyphics"); // => true
isIsogram("label") // => false
