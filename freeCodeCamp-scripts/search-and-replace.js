/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.
- First argument is the sentence to perform the search and replace on.
- Second argument is the word that you will be replacing (before).
- Third argument is what you will be replacing the second argument with (after). 

Also it needs to preserve the case of the first character in the original word when replaces it. For example if it means to replace the word Book with the word dog, it should be replaced as Dog. 
*/

// First idea, probably not the best but it works.
function myReplace(str, before, after) {
  // Defines a regex that will compare the beginning with a capital letter.
  let firstUpperCase = /^[A-Z]/;
  // Testing if the before argument starts or not with capital letter.
  if (firstUpperCase.test(before)){
    // If starts with then converts the first letter of after argument to uppercase.
  	let firstCapitalLetter = after.slice(0,1).toUpperCase();
    // Once the first letter is done, concatenates with the rest of the string.
    after = firstCapitalLetter.concat(after.slice(1));
  }
  else {
    // If starts with no capital letter converts the first letter of after argument to lowercase.
    let firstCapitalLetter = after.slice(0,1).toLowerCase();
    // Once the first letter is done, concatenates with the rest of the string.
    after = firstCapitalLetter.concat(after.slice(1));
  }
  // Replacing the before for after string in the original string.
   return str.replace(before,after); 
}

// Test
myReplace("He is sleeping on the couch","sleeping","Eating")
// It returns "he is eating on the coach" because of sleeping has 's' in lowercase, so Eating should be 'eating'.

// Another posibilityy to achieve the same result
function myReplace(str, before, after) {
  // Find index where before is on string
  let index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);
  
  return str;
}


