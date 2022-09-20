export function expand(expr) {
  let pot = expr.match(/\^([\d]*)$/)[1]; // [1] because the capture group for only the numbers after ^
  if (parseInt(pot) === 0) return "1";

  let coefficient = expr.match(/-?\d*[a-z]/i)[0]; // Matches the char variable with - or not.
  let operationTerm = expr.match(/[a-z]([\+|\-](\d+))/i); // [1] because of the capture group
  operationTerm[0].startsWith("-")
    ? (operationTerm = parseInt(`-${operationTerm[1]}`))
    : (operationTerm = parseInt(operationTerm[1]));

  let expansion = "";
  for (let i = pot; i >= 0; i--) {
    let first = getFirstTerm(pot, pot - i);
    console.log(coefficient, i);
    let second = getSecondTerm(coefficient, i);
    let third = getThirdTerm(operationTerm, pot - i);
    // console.log("first es", first);
    // console.log("second es", second);
    // console.log("third es", third);
    // console.log("number es:", getNumber(second));
    let term = getTerm(first, getNumber(second), third, second);
    // console.log("producto es: ", second.match(/-?d*/) * first * third);
    term.startsWith("-")
      ? (expansion += term)
      : term.length > 0 && expansion.length > 0
      ? (expansion += `+${term}`)
      : (expansion += term);
  }
  return expansion;
}

function getFirstTerm(pow, actual) {
  const dividend = factorial(pow);
  const divisor = factorial(actual) * factorial(pow - actual);
  return dividend / divisor;
}

function getSecondTerm(term, pot) {
  if (pot === 1) return term;
  else if (pot === 0) return ""; //If coefficient^0 only need the numberTerm.
  const number = term.match(/-?\d*/)[0];
  // Checking to pow the number before the coefficient.
  if (number) {
    if (number === "-" && pot % 2 === 0) {
      console.log("ola");
      return `${term.match(/[a-z]/i)}^${pot}`;
    }
    return `${Math.pow(parseInt(number), parseInt(pot))}${term}^${pot}`;
  }

  return `${term}^${pot}`;
}

function getThirdTerm(operationTerm, pow) {
  return Math.pow(parseInt(operationTerm), parseInt(pow));
}

function getNumber(exp) {
  // console.log(exp);
  const aux = exp.match(/-?\d*/)[0];
  // console.log(exp, aux);
  // console.log(aux, " es aux");
  return aux === "" ? 1 : aux === "-" ? -1 : aux;
}

function getTerm(first, second, third, exp) {
  // console.log(first, second, third);
  let aux = exp.match(/[a-z]\^\d+/i);
  if (aux !== null) {
    return `${first * second * third}${aux}`;
  }
  aux = exp.match(/[a-z]/i);
  if (aux !== null) {
    return `${first * second * third}${aux}`;
  }
  return `${first * second * third}`;
}

function factorial(number) {
  let fact = 1;
  for (let i = number; i > 0; i--) {
    fact *= i;
  }
  return fact;
}

console.log(expand("(x-1)^1"));
// console.log(getSecondTerm("-4y^3", 3));

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
