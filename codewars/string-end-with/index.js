
// It was my first solution but it passed the first test's but not the seconds for any reason that I didn't understand.
function solutionOne(str, ending){
  let regex = RegExp(`${ending}$`);
  return regex.test(str)
}

// This is my second solution that is more complex & less readable but passed all the tests.
export function solution(str,ending){
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


// Finally I discovered the js built-in method to solve this.. but too late!
function solutionAlernative(str, ending){
  return str.endsWith(ending);
}

