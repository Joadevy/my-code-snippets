// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// The predicate pre will be an object property and you need to return true if its value is truthy.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// falsyValues = [undefined, null,0,'', false,NaN]


function truthCheck(collection, pre) {
  return collection.every(element => element[pre])
}

// Testing 
console.log(truthCheck([{name: "freeCodeCamp", users: [{name: "Quincy"}, {name: "Naomi"}]}, {name: "Code Radio", users: [{name: "Camperbot"}]}, {name: "", users:[]}], "users"))
// It returns true cause all elements have a value different than the falsy

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")
// It returns false because the first object's isBot prop is equal than a falsy value.
