// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  string = string.toUpperCase();
  let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let regex = /[A-Za-z]/; // To test in every char of the input str
  return string.split('').reduce((set,letter) =>{ 
    // if is a letter && the set doesn't have this then pushes into it.
    if (regex.test(letter) && !set.includes(letter)){
      set.push(letter);
    }
    return set
    // Finally compares the length of the set with the length of the alphabet.
		},[]).length === alphabet.length;
}

// Clever approachment:
function isPangramClever(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((letter) => string.toLowerCase().includes(letter));
}

// Testing
isPangram("The quick brown fox jumps over the lazy dog.") // => true
isPangram("This is not a pangram") // => false
