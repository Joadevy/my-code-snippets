// My solution
export var countBits = function(n) {
    // n.toString converts n to binary and then after the split, reduce count the 
    return n.toString(2).split('').reduce((bits,bit) => {
        bit == 1 ? bits++ : '';
        return bits;
    },0)
};

// Another interesting approach:
let countBitsAlternative = n => n.toString(2).split('0').join('').length;

