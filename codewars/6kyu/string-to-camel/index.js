export function toCamelCase(str){
    return str.split(/-|_/).reduce((camelCase,word,index)=>{
        index == 0 ? camelCase += word.charAt(0)
                   : camelCase += word.charAt(0).toUpperCase();
        camelCase += word.slice(1,word.length).toLowerCase()
        return camelCase
    },'') 
}