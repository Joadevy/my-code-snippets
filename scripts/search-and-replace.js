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


