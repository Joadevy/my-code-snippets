// Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which TAKES A ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

let rot13Letters = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M']

function rot13(str) {
  let regex = /[A-Z]/;
  return str.split('').reduce((decoded,letter)=>{
    if (regex.test(letter)){
  		decoded += rot13Letters[alphabet.indexOf(letter)]
    }else {
      decoded+= letter
    }
    return decoded
  },'')
}

rot13("SERR PBQR PNZC");