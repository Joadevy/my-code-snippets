export function isPangram(string){
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
