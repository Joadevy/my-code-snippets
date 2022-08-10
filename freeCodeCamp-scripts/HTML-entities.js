// Convert HTML entities: convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


// Initial solution (looking for solve the problem)
function convertHTML(str) {
  // Saving the characters and their HTML entity.
  let entities = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&apos;'
  }
  let specialChars = Object.keys(entities);
  
 return [...str]
   .reduce((string,letter)=>{
   // If the letter of the string is a special char
  	if (specialChars.includes(letter)){
      // Replaces it for their entity.
      letter = entities[letter]
    }
   return string.concat(letter)
 },'')
}

convertHTML("Dolce & Gabbana");

