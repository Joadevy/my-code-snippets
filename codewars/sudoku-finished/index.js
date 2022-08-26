// I KNOW, I HAVE FOR-LOOPING ADDICTION. DON'T JUDGE ME, I'LL BE OK AND THE TESTS PASSED.

export const doneOrNot = (board) => {
    if (allRowsOK(board) && allColumnsOK(board) && allBoxesOK(board)){
        return 'Finished!'
    } else {
        return 'Try again!'
    }
}


function allRowsOK (board) {
    for (let row = 0 ; row < 9 ; row ++){
        let rowChecking = board[row]
        if (!allNumbersIn(rowChecking)) return false;  // Check if all numbers are in the row.
        for (let subRow = row+1; subRow < 9 ; subRow++){
            if (arrayEquals(rowChecking,board[subRow])){ 
                return false
            }
        }
    }
    return true
}

function allNumbersIn (line){
    const numbers = [1,2,3,4,5,6,7,8,9];
    return numbers.every(number => line.includes(number))
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

function allColumnsOK(board){
    for (let column = 0 ; column < 9 ; column ++){
        const columnChecking = loadColumn(column,board);
        if (!allNumbersIn(columnChecking)) return false; // Check if all numbers are in the column.
        for (let subColumn = column+1; subColumn < 9 ; subColumn++){
            const nextColumn = loadColumn(subColumn,board);
            if (arrayEquals(columnChecking,nextColumn)){ 
                return false
            }
        }
    }
    return true
}

function loadColumn(column,board) {
    const arr = []
    for (let row = 0 ; row < 9 ; row++){
        arr.push(board[row][column])
    }
    return arr
}   

function allBoxesOK(boardImmutable){
    let board = boardImmutable;
    const arrayBoxes = [];
    for (let boxesControl = 0 ; boxesControl <3 ; boxesControl++){
        for (let boxLine = 0; boxLine < 9 ; boxLine+=3){
           let boxChecking = loadBox(boxLine,board);
           if (!allNumbersIn(boxChecking)) return false // Check if all numbers are in the box.
            arrayBoxes.push(boxChecking); // Creates an array with all the 3x3 boxes.
        }   
    }

    // Checking for 3x3 boxes are all differents.
    return allRowsOK(arrayBoxes)
}

function loadBox(boxLine,board){
    let arr = []
    for (let line = boxLine; line < boxLine+3 ; line++){
        for (let numbers = 0; numbers < 3 ; numbers++){
            arr.push(board[line].shift());
        }
    }
    return arr
}
