class romanConverter {
    constructor(){
        this.converterTable = {
            1000: 'M',
            900:  'CM',
            500:  'D',
            400:  'CD',
            100:  'C',
            90:   'XC',
            50:   'L',
            40:   'XL',
            10:   'X',
            9:    'IX',
            5:    'V',
            4:    'IV',
            1:    'I'
        }
    }

    toRoman(integer){
       let romanNumber = '';
       let keys = Object.keys(this.converterTable).sort((a,b) =>{ return a-b ? -1 : 1 }); 
        for (let key of keys){
            while(integer - key >= 0){
                integer-=key;
                romanNumber += this.converterTable[key];
            }
        }   
        return romanNumber
    }

    fromRoman(roman){
        let integerNumber = 0;
        let queue = roman.split('');

        let romanNumber = ''
        while (queue.length > 0){
            romanNumber = queue.shift();
            if (romanNumber == 'C' && queue[0] == 'M'){
                for (const number in this.converterTable){
                    this.converterTable[number] == 'CM' ? integerNumber += parseInt(number) : ''
                }
                queue.shift()
            } else if (romanNumber == 'C' && queue[0] == 'D'){
                for (const number in this.converterTable){
                    this.converterTable[number] == 'CD' ? integerNumber += parseInt(number) : ''
                }
                queue.shift()
            } else if (romanNumber == 'X' && queue[0] == 'C'){
                for (const number in this.converterTable){
                    this.converterTable[number] == 'XC' ? integerNumber += parseInt(number) : ''
                }
                queue.shift()
            } else if (romanNumber == 'X' && queue[0] == 'L'){
                for (const number in this.converterTable){
                    this.converterTable[number] == 'XL' ? integerNumber += parseInt(number) : ''
                }
                queue.shift()
            } else if (romanNumber == 'I' && queue[0] == 'X'){
                for (const number in this.converterTable){
                    this.converterTable[number] == 'IX' ? integerNumber += parseInt(number) : ''
                }
                queue.shift()
            } else if (romanNumber == 'I' && queue[0] == 'V'){
                for (const number in this.converterTable){
                    this.converterTable[number] == 'IV' ? integerNumber += parseInt(number) : ''
                }
                queue.shift()
            }
            else {
                for (const number in this.converterTable){
                    this.converterTable[number] == romanNumber ? integerNumber += parseInt(number) : ''
                }
            }
        }
        
        return integerNumber
    }
}

export const RomanNumerals = new romanConverter();