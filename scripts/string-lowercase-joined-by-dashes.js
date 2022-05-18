// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes
function spinalCase(str) {
  return str
  	// $1 keeps the lowercase letter matched and $2 the upper because it follows the regex pattern and then replaces them by "$1 $2" (basically adds a whitespace: "letterUpper" => "letter Upper")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
  	// Splitting in an array separating by whitespaces or underscores.
    .split(/\s|[_]/)
  	// Joining the array in a string separated by dashes.
    .join('-')
  	// Converting the string to lowercase
    .toLowerCase();
}

// Testing
console.log(spinalCase('ThisIs spinal_top'));
// It returns this-is-special-top

// Another way to achieve the same result:
function spinalCases(str) {
  return str
  // This regex splits for whitespaces, underscores or is followed by an uppercase letter
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
