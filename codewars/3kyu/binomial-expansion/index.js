export function expand(expr) {
  let pot = expr.match(/\^([\d]*)$/)[1]; // [1] because the capture group for only the numbers after ^
  console.log(pot);
  if (pot === 0) return "1";
  let coefficient = expr.match(/-?\d*[a-z]/i)[0]; // Matches the char variable with - or not.
  console.log(coefficient);
  let operationTerm = expr.match(/[\+|\-]([\d]*)/i); // [1] because of the capture group
  operationTerm[0].startsWith("-")
    ? (operationTerm = parseInt(`-${operationTerm[1]}`))
    : (operationTerm = parseInt(operationTerm[1]));
  console.log(operationTerm);

  let expansion = "";
  for (let i = pot; i >= 0; i--) {
    let coef = getCoefficient(coefficient, i);
    coef.startsWith("-")
      ? (expansion += coef)
      : coef.length > 0 && expansion.length > 0
      ? (expansion += `+${coef}`)
      : (expansion += coef);
  }
  console.log(expansion);
}

function getCoefficient(term, pot) {
  if (pot === 1) return term;
  else if (pot === -1) return `-${term}`;
  else if (pot === 0) return ""; // If coefficient^0 only need the numberTerm.
  const number = term.match(/-?\d*/)[0];
  // Checking to pow the number before the coefficient.
  if (number) {
    term = term.match(/[a-z]/i);
    return `${Math.pow(parseInt(number), parseInt(pot))}${term}^${pot}`;
  }

  return `${term}^${pot}`;
}

function factorial(number) {
  factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

console.log(expand("(-2X-5)^3"));
/* 
Analyzing the problem:
- input is always an expression like (ax+b)^n
- x is any single character variable, 
- a and b are integers and n is a natural number 

-  If a = 1, no coefficient will be placed in front of the variable. 
-  If a = -1, a "-" will be placed in front of the variable.

- Expanded form should be returned as a string in the form ax^b+cx^d+ex^f.
- a, c, and e are the coefficients of the term and x is the variable in the original expression.
- b, d, and f, are the powers that x is being raised to in each term and are in decreasing order.

- If the coefficient of a term is zero, the term should not be included. 
- If the coefficient of a term is one, the coefficient should not be included. 
- If the coefficient of a term is -1, only the "-" should be included. 
- If the power of the term is 0, only the coefficient should be included. 
- If the power of the term is 1, the caret and power should be excluded. "(x-1)^1" toBe "x-1"
*/
