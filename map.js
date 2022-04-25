/* <---- Creating my own Array.prototype.map method ----> */

// Defines an Array to apply the myMap then.
const s = [23, 65, 98, 5];

// Creates a new property into the Array's prototype object.
Array.prototype.myMap = function(callback) {
  const newArray = [];
/* 'this' refers to the Array that it's used the method. forEach takes each item in the Array
  and pushes into the newArray but only after applying the callback function on the item. */
  this.forEach(item => newArray.push(callback(item)))
// Returning  the newArray just like .map() does.
  return newArray;
};

// Stores the result array after calling the myMap method in the array 's' .
const new_s = s.myMap(function(item) {
    // Defining the condition to evaluate in each item of the array.
  return item * 2;
});

console.log(new_s)
// It shows [ 46, 130, 196, 10 ]