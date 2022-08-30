export function duplicateCount(text){
  let str = text.toUpperCase(); // To avoid mutation of the text
  return str.split('').reduce((repeats,char)=>{
    // Iterating through the next index of the actual char to the end of text
    for (let index=str.indexOf(char)+1;index<str.length;index++){
      // if there is another same char than actual of the reduce
    	if (str.charAt(index) == char){
        // Increments the repeats counter.
        repeats++;
        // Removing all the other same chars in text because they don't matter anymore.
        for (let letter in str){
           str = str.replace(char,''); 
        }
      }
    }
    return repeats
  },0)
}
