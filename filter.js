// Creating my own filter method

// The global array for test.
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // This represent the array that calls the method.
  this.forEach(item => {
    // If the item meets the condition then pushes it into an array.
    callback(item) ? newArray.push(item) : ''
  })
  return newArray;
};

// Calling the property defining the callback function in the parameter.
const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);
// It returns [ 23, 65, 5 ]
