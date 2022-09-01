export function solution(input, markers) {
    // Splitting by the \n new line metacharset.
    return input.split('\n').reduce((output,phrase,index,array) => {
        for (const letter of phrase){
            if (markers.includes(letter)) break
            // If the letter isn't a separator, then add it to the output.
            output+=letter
        }
        output = output.trim(); // Removing whitespaces at end (and beginning) of the actual output .

        // Joining with \n (new line metacharset) each line-output phrases.
        return index === array.length-1 ? output : output +='\n'
    },'')
};
