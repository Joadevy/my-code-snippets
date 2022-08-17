// Make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a,b)=>b-a).join(''));
}

// I like this solution better (because of the reverse, it's more readable)
function descendingOrders(n){
  return parseInt(n.toString().split('').sort().reverse().join(''), 10);
}

// Tests
descendingOrder(345) // => 543
descendingOrder(12345987) // => 98754321
descendingOrder(98975) // => 99875
