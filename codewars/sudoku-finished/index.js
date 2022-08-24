export const doneOrNot = (board) => {
    for (let row = 0 ; row <= 9 ; row ++){
        let rowChecking = board[row]
        for (let subRow = row+1; subRow < 9 ; subRow++){
            console.log(rowChecking)
            console.log(board[subRow])
            if (rowChecking == board[subRow]){ // ESTA CONDICION EN ARRAYS NO SIRVE!!! (por la referencia)
                return 'Try again!'
            }
        }
    }
    return 'las filas no se repiten'
}

// Se debe checkear que:
// * Todos los numeros esten en cada columna, renglon y cuadro 3x3.
// * Ningun renglon sea igual a otro.
// * Ninguna columna sea igual a otra.
// * Ningun cuadro 3x3 sea igual a otro.

// Tiene pinta de que hay que checkear con unos cuantos FOR, la pregunta es que chequear primero para mejorar eficiencia?

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]]))