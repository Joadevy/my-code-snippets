// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//  Examples:
//  	16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

function digitalRoot(n) {
  n = n.toString();
  // If the length is 1 then it's a valid number to return.
	if (n.length == 1){
    return parseInt(n);
  } else{
   	return digitalRoot(n.split('').reduce((sum,number)=>{
    return sum += parseInt(number);
  	},0)); 
  }
}

// Tests
digitalRoot(942); // => 6
digitalRoot(79) ; // => 7 + 9 = 16 => 1 + 6 => 7
