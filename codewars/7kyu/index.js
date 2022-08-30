// Using a stack to track the actual button status.

export function likeOrDislike(buttons) {
    // Value to control the pop of the stack.
    let value = ''
    return buttons.reduce((stack,status) => {
      if (status == 'Like'){
        // Checks the top of the stack
        value = stack.pop();
        // Pushes the correct value according top of stack and the butto's value processed.
        value == 'Like' ? stack.push('Nothing') : stack.push(status);
      } else if (status == 'Dislike'){
        value = stack.pop();
        value == 'Dislike' ? stack.push('Nothing') : stack.push(status);
      }
      return stack
    },['Nothing']).join()
  }

  // A more performance solution might be:
  function likeOrDislikeAlt(buttons) {
    let state = 'Nothing';
  
    for (const button of buttons) {
      if (button === state) {
        state = 'Nothing'
      } else {
        state = button
      }
    }
  
    return state
  }