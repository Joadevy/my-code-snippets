// Convert the given number into a roman numeral. All roman numerals answers should be provided in upper-case.

let arabicRoman = {
  1000: 'M',
	900: 'CM',
	500: 'D',
	400: 'CD',
	100: 'C',
	90: 'XC',
	50: 'L',
	40: 'XL',
	10: 'X',
	9: 'IX',
	5: 'V',
	4: 'IV',
	1: 'I'
}

function convertToRoman(num) {
  let numInRoman = '';
  
  while (num>0){ // Once num reaches 0, it'll stop.
// Iterating throw the keys and sorting them (because the default order is ascendent)
  	(Object.keys(arabicRoman).sort(function(a,b){
   		return b - a;
		})).forEach(key => { 
// Iterates on a key til while the result of num-key>0, the changes to other key.
      while(num-key>=0){
      	num = num-key
        numInRoman+=arabicRoman[key] // Acummulates the roman equivalent.
      }   
    })
  }
 return numInRoman;
}

// Testing
convertToRoman(3999);
// It returns 'MMMCMXCIX'

convertToRoman(12) // should return the string XII (passed)
convertToRoman(45) // should return the string XLV (passed)