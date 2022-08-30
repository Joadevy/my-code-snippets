export const decodeMorse = function(morseCode){
    morseCode = morseCode.trim() // Before/After whitespaces have no meaning.

    const arrayMorse = morseCode.split('   '); // Separating by words.
    return (arrayMorse.reduce((decoded,morseWord,index) => {
        morseWord.split(' ')
                 .map(letter => decoded += alphabet[letter])
        return index !== (arrayMorse.length-1) ? decoded + ' ' : decoded;
    },''))
  }

  const alphabet = {  
    '-----':'0',
    '.----':'1',
    '..---':'2',
    '...--':'3',
    '....-':'4',
    '.....':'5',
    '-....':'6',
    '--...':'7',
    '---..':'8',
    '----.':'9',
    '.-':'A',
    '-...':'B',
    '-.-.':'C',
    '-..':'D',
    '.':'E',
    '..-.':'F',
    '--.':'G',
    '....':'H',
    '..':'I',
    '.---':'J',
    '-.-':'K',
    '.-..':'L',
    '--':'M',
    '-.':'N',
    '---':'O',
    '.--.':'P',
    '--.-':'Q',
    '.-.':'R',
    '...':'S',
    '-':'T',
    '..-':'U',
    '...-':'V',
    '.--':'W',
    '-..-':'X',
    '-.--':'Y',
    '--..':'Z',
    '/':' ',
    '-.-.--':'!',
    '.-.-.-':'.',
    '--..--':','
}