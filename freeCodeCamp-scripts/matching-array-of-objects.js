// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument), considering that the second arguments might have different amount of propertys.

function whatIsInAName(collection, source) {
  // Saving the keys of the second argument.
  let sourceKeys = Object.keys(source);
  // Filtering the array iterating on each object.
 	return collection.filter(obj => sourceKeys
                        // Cheking if every key of the 2nd argument is in the obj && all of there are equal.
                    .every(key => obj.hasOwnProperty(key) && obj[key] == source[key]));
}

// Testing area
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });

/* This returns:
[ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ] 
because the first & the last elements of the array has 'apple' and 'bat' with equal values of the 2nd argument*/