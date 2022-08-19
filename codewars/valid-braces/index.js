// My solution
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

// Also I loved this clean syntax approach, but not very efficient (talking about cost in long-term)
function validBracesAlt(braces) {
    return (
        (braces.includes("()"))
        ? validBracesAlt(braces.replace("()", ""))
        : (braces.includes("[]"))
            ? validBracesAlt(braces.replace("[]", ""))
            : (braces.includes("{}"))
                ? validBracesAlt(braces.replace("{}", ""))
                : (braces.length > 0)
                    ? false
                    : true
    );
}