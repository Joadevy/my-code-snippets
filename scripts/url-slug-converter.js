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
    .trim()
    .split(/\s+/)
    .join("-");
}