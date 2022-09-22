export function expand(expr) {
  let pot = expr.match(/\^([\d]*)$/)[1]; // [1] because the capture group for only the numbers after ^
  if (parseInt(pot) === 0) return "1";
  if (parseInt(pot) === 1) return `${expr.match(/-?\d*[a-z][\+|\-]\d+/)}`;

  let coefficient = expr.match(/-?\d*[a-z]/i)[0]; // Matches the char variable with - or not.
  let operationTerm = expr.match(/[a-z]([\+|\-](\d+))/i); // [1] because of the capture group
  if (operationTerm === null) return `${coefficient}^${pot}`;

  operationTerm[0].startsWith("-")
    ? (operationTerm = parseInt(`-${operationTerm[1]}`))
    : (operationTerm = parseInt(operationTerm[1]));

  let expansion = "";
  for (let i = pot; i >= 0; i--) {
    let first = getFirstTerm(pot, pot - i);
    let second = getSecondTerm(coefficient, i);
    let third = getThirdTerm(operationTerm, pot - i);
    let term = getTerm(first, getNumber(second), third, second);
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
      return `${term.match(/[a-z]/i)}^${pot}`;
    } else if (number === "-") {
      return `${term}^${pot}`;
    }
    return `${Math.pow(parseInt(number), parseInt(pot))}${term.match(
      /[a-z]/i
    )}^${pot}`;
  }
  return `${term}^${pot}`;
}

function getThirdTerm(operationTerm, pow) {
  return Math.pow(parseInt(operationTerm), parseInt(pow));
}

function getTerm(first, second, third, exp) {
  let aux = exp.match(/[a-z]\^\d+/i);
  if (aux !== null) {
    let helper = first * second * third;
    return helper === 1
      ? `${aux}`
      : helper === -1
      ? `-${aux}`
      : `${helper}${aux}`;
  }

  aux = exp.match(/[a-z]/i);
  if (aux !== null) {
    let helper = first * second * third;
    return helper === 1
      ? `${aux}`
      : helper === -1
      ? `-${aux}`
      : `${helper}${aux}`;
  }
  return `${first * second * third}`;
}

function getNumber(exp) {
  const aux = exp.match(/-?\d*/)[0];
  return aux === "" ? 1 : aux === "-" ? -1 : aux;
}

function factorial(number) {
  let fact = 1;
  for (let i = number; i > 0; i--) {
    fact *= i;
  }
  return fact;
}
