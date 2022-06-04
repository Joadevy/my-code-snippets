// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// Eg fearNotLetter("abce") should return the string d

// First iteration to solve the problem
function fearNotLetter(str) {
  let abc = 	['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  // Tracking the index of the first char in the string
  let firstLetter = abc.indexOf(str[0]);
  // Iterates for all the chars in the str
  for (let letter in str){
    // If the letter in the str doesn't match with the abc in this position, that's the error
    if (str[letter] !== abc[firstLetter+parseInt(letter)]){
      // Returns the letter that is missing
      return abc[firstLetter + parseInt(letter)]
    } 
  }
  // If the str is following the alphabet order returns undefined
  return undefined
}

// Test
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
// It returns undefined
fearNotLetter("abcdf");
// It returns 'e'


// Other solution using ASCII 
function fearNotLetter(str) {
  // Stores first letter ASCII code.
  let currCharCode = str.charCodeAt(0);
  console.log(currCharCode)
  let missing = undefined;

  str
    // spliting the string in an array of letters
    .split("")
    .forEach(letter => {
      if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
      } else {
        // Saving the letter before search at the str object using the currCharCode ASCII
        missing = String.fromCharCode(currCharCode);
      }
    });

  return missing;
}

