// That was hard. The border cases (with 0 or numbers 0<x<16) were difficult to pass the tests.
// For the code I used recursion to solve the 0-cases and then checkers with the ternary op for the others.

export function rgb(r, g, b){
    return r > 255 ? rgb(255,g,b)              : 
           r < 0 || r === 0  ? rgb('00',g,b)   :
           g > 255 ? rgb(r,255,b)              : 
           g < 0 || g === 0 ? rgb(r,'00',b)    :
           b > 255 ? rgb(r,g,255)              :
           b < 0 || b === 0  ? rgb(r,g,'00')   : 
           ( 
            r !== '00' ? 
                    r > 15 ? r = r.toString(16) : r = '0'+r.toString(16) : '',
            g !== '00' ? 
                    g > 15 ? g = g.toString(16) : g = '0'+g.toString(16):  '',
            b !== '00' ? 
                    b > 15 ? b = b.toString(16) : b = '0'+b.toString(16) :  '',
            (r.concat(g,b)).toUpperCase()
           ) 
}
