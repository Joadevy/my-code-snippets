/* Pairs of DNA strands consist of protein base pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
or the input TTGAG should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
*/

function pairElement(str) {
  // Creating an object with their pair as key for each base element
  let DNA_PAIRS= {
    G : 'C',
    C : 'G',
    A : 'T',
    T : 'A'
  }
  // Creating the array to contain the pairs
  let ArrayDNA = [];
  // Iterates for each char, which represents a base element.
  for (let element of str){
    element in DNA_PAIRS 
    	// If the element is a valid base element returns the element with their pair
      ? ArrayDNA.push([element,DNA_PAIRS[element]])
    	// If not, returns an advice.
    	: console.log(`The base element '${element}' doesn't exist!`);
  }
  return ArrayDNA;
}

// Test
pairElement("GCG");
// It returns [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
pairElement("CGF")
// Returns [ [ 'C', 'G' ], [ 'G', 'C' ] ] and the advice of "The base element 'F' doesn't exist!"

// Other solution using a split and then a map method.
function pairElements(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}