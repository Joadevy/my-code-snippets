export function validBraces(braces){ 
    const oppositeBrace = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    let stackBraces = []; // it'll check for the correct order of the braces.

    for (let brace of braces){
        if (brace === '{' || brace === '[' || brace === '('){
            stackBraces.push(brace);
        } else if ((brace === '}' || brace === ']' || brace === ')') && (brace == oppositeBrace[stackBraces[stackBraces.length-1]])){
            stackBraces.pop();
        } else {
            return false
        }        
    }
    
    if (stackBraces.length == 0){
        return true
    }
    return false
}