// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// It was my first solution but it passed the first test's but not the seconds for any reason that I didn't understand.
function solutionOne(str, ending){
  let regex = RegExp(`${ending}$`);
  return regex.test(str)
}

// This is my second solution that is more complex & less readable but passed all the tests.
function solution(str,ending){
  let index = str.length - ending.length; // The index for start comparing
  let counter = 0; // To track the position in the str
  return str.split('').reduce((acumEnding,letter) => {
  	  letter ? counter++ : ''; // Iterating through the str

    	if (counter > index){ // Saves the ending of the str starting from the index
        return acumEnding.concat(letter)
      }
    return acumEnding
  },'') === ending; // Finally compares if the ending of str founded === ending
}

// Testing
solution('abcde','cde'); // => true
solution('abcde', 'abc'); // => false
solution('myStringExample','Example') // => true
solution('myStringExample','example') // => false (case matter)
