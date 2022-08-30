// My 2nd solution
export function countSmileys(arr) {
    // Declaring the pattern of a valid smiley face.
    const regex = /[:|;][-|~]?[)|D]/;
    // Testing and counting each face of the array
    return arr.reduce((counter,face) => {
        regex.test(face) ? counter++ : ''
        return counter;
    },0)
}

// My first solution (easier)
export function countSmileysA(arr) {
    const smileyFaces = [':)',':D',';-D',';~)',';~D',';-)',':~)',':-)',':-D',':~D'];
    return arr.reduce((counter,face) => {
        smileyFaces.includes(face) ? counter++ : '';
        return counter;
    },0)
}
