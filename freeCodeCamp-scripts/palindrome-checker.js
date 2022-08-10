// Return true if the given string is a palindrome. Otherwise, return false.
// It needs to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// Initial solution, looking for solve the problem.
function palindrome(str) {
  let numberLetter = /[A-Za-z0-9]/
  
  // Filtering for only number-letters && all of it in uppercase.
  str = str.split('').filter(character => {
    return numberLetter.test(character) ? character : '' ;
  }).join('').toUpperCase()
  
  let back = str.length-1;
  // Check if each letter on the front is the same as the corresponding letter on the back of the string.
  for (let front = 0; front<back;front++){
      if (str[front] !== str[back]){
        return false
      }
    back--
  }
  return true;
}

// Testing
palindrome("never odd or even")
// It returns true cause it's the same from the beggining-end as from the end-beginning.