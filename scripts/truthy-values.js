// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// The predicate pre will be an object property and you need to return true if its value is truthy.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

function truthCheck(collection, pre) {
  return collection.reduce((status,element)=> {
    return console.log(element);
  },'');
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");