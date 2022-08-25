export const doneOrNot = (board) => {
    if (allRowsDifferent(board) && allColumnsDifferent(board)){
        return 'All going well'
    } else {
        return 'Try Again!'
    }
}

// Auxiliar function that checks for equalit of the arrays.
function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
  }

function allRowsDifferent (board) {
    for (let row = 0 ; row <= 9 ; row ++){
        let rowChecking = board[row]
        for (let subRow = row+1; subRow < 9 ; subRow++){
            if (arrayEquals(rowChecking,board[subRow])){ 
                return false
            }
        }
    }
    return true
}

function allColumnsDifferent (board){
    for (let column = 0 ; column <= 9 ; column ++){
        const columnChecking = loadColumn(column,board);
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


// Se debe checkear que:
// * Todos los numeros esten en cada columna, renglon y cuadro 3x3.
// * Ningun renglon sea igual a otro.
// * Ninguna columna sea igual a otra.
// * Ningun cuadro 3x3 sea igual a otro.

// Tiene pinta de que hay que checkear con unos cuantos FOR, la pregunta es que chequear primero para mejorar eficiencia?


console.log(doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]))