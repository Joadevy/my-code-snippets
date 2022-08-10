/* 	VALID US PHONE FORMAT CHECKER

Return true if the passed string looks like a valid US phone number.
 The user may fill out the form field any way they choose as long as it has the format of a valid US number

	Valid formats:
555-555-5555 | (555)555-5555 | (555) 555-5555 | 555 555 5555 | 5555555555 | 1 555 555 5555 


Strategy that I thought to solve the problem:

Clean the string and Then check if it has length of 10 or 11, if not then return false.
If length is 10 or 11 then: try a regex starting with 1 | nothing:
  (XXX) followed by whitespace (or not) and XXX-XXXX
  XXX-XXX-XXXX 
  XXX XXX XXX | XXXXXXXXXX
*/


function telephoneCheck(str) {
  let onlyNumbers = /[0-9]/;
  let cleanStr = str.split('').filter(element => element.match(onlyNumbers));
  if (cleanStr.length == 10 || cleanStr.length ==11){    
    let regex = /^1? ?[(]\d{3}[)]\s?\d{3}[-]?\d{4}$|^1?\s?\d{3}\s?\d{3}\s?\d{4}$|^1?\s?\d{3}[-]\d{3}[-]\d{4}$/
     if (regex.test(str)){
       return true
     }
  }
  return false;
}

// Testing
telephoneCheck("555-555-5555") 						// TRUE
telephoneCheck("2 (757) 622-7382") 				// FALSE
telephoneCheck("1 456 789 4444")				  // TRUE
telephoneCheck("1 555)555-5555")				 	// FALSE
Waiting:telephoneCheck("1(555)555-5555") 	// TRUE

