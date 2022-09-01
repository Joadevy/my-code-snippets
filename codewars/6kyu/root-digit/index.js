export function digitalRoot(n) {
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
