// The script takes a string and returns an URL slug.

function urlSlug(title) {
  return title.split(' ').reduce((words,word)=>{
    if (word != ''){
      words.push(word);
    }
    return words
  },[]).join('-').toLowerCase()
}
console.log(urlSlug(" Winter Is  Coming"));
// This return winter-is-coming.

// Other solution might be
function urlSlug(title) {
  return title
    .toLowerCase()
  // .trim removes the whitespaces from the start/end of the string.
    .trim()
	// Split taking an regex (that splits the in an array using the whitespaces as delimiters).
    .split(/\s+/)
  // Joining each word in the array in a string with '-' char.
    .join("-");
}