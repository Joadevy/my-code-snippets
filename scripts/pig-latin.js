/*  Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/

// ****** INITIAL SOLUTION (looking for resolve the problem) ******
function translatePigLatin(str) {
  // Splitting the word in an array.
  let stringArray = str.split('');
  let indexChar = 0;
 	// Searching for the index of the consonant clusters end.
    while(!['a','e','i','o','u'].includes(stringArray[indexChar]) && indexChar<str.length){
    indexChar++;
  }
  
  // If the word didn't start with vowel
  if (indexChar == 0){
    return stringArray.join('').concat('way');
  } else {
    // Probably the less readable solution but it works and that's the important thing (then optimize)
    return stringArray.join('').concat(stringArray.join('').slice(0,indexChar)).slice(indexChar).concat('ay');
  }
  console.log(stringArray);
}

// Test with a word with no-vowels
translatePigLatin("rhytm");
// It returns 'rhytmay'