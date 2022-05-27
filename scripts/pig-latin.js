/*  Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add 'ay' to it.

- If a word begins with a vowel, just add 'way' at the end.
*/

// ****** INITIAL SOLUTION (focusing on resolve the problem) ******
function translatePigLatin(str) {
  // Splitting the word in an array.
  let stringArray = str.split('');
  let indexChar = 0;
 	// Searching for the index of the consonant clusters end.
    while(!['a','e','i','o','u'].includes(stringArray[indexChar]) && indexChar<str.length){
    indexChar++;
  }
  
  // If the word starts with a vowel
  if (indexChar == 0){
    // Joins the letters in the array and adding 'way' at the end.
    return stringArray.join('').concat('way');
  } else {
    // Joins the letters to make the string.
    stringArray = stringArray.join('');
    // Adds the consonant cluster to the end, then removes the cluster from the beginning and finally concatenates 'ay' at the end.
    return stringArray.concat(stringArray.slice(0,indexChar)).slice(indexChar).concat('ay');
  }
}

// Test with a word with no-vowels
translatePigLatin("rhytm");
// It returns 'rhytmay'