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

// **** OPTIMIZING THE CODE ****

function translatePigLatins(str) {
  // Searching in the beginning ^ the longest match of everything not a vowel (consonants)
  let consonantRegex = /^[^aeiou]+/;
  // If pattern found, it saves the match, else, it returns null
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
  			// Removing the consonant cluster.
        .replace(consonantRegex, "")
  			// Concatenating the consonant at the end.
        .concat(myConsonants)
  			// Concatenating 'ay' after the consonant cluster.
        .concat("ay")
  	// Else if begins with vowel, just concatenates 'way' at the end.
    : str.concat("way");
}

// **** OPTIMIZING A BIT MORE ****
function translatePigLatins(str) {
  // Searching for the first vowel index.
  let firstVowel = str.search(/[aeiou]/);
  // If the firstVowel index is 0 (starts with vowel) and concatenates 'way' ; else removes the substr til the first vowel index, concatenates the consonants cluster and adds 'ay' at the end.
  return firstVowel === 0 ? str + 'way' : str.substr(firstVowel) + str.substr(0, firstVowel) + 'ay';
}

