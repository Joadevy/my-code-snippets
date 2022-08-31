export function arrayDiff(a, b) {
  // The filter condition mustn't have an if statement because if b has 0 or is an empty [] (they're falsy values) it won't work.
  return a.filter(element => !b.includes(element));
}
