export function humanReadable (seconds) {
    let hours = Math.trunc(seconds/3600);
    seconds -= hours * 3600;
    let minutes = Math.trunc(seconds/60);
    seconds-= minutes * 60;
    
    hours == 0 ? hours = '00' : hours < 10 ? hours = '0'+ hours : '';
    minutes == 0 ? minutes = '00' : minutes < 10 ? minutes = '0' + minutes : '';
    seconds == 0 ? seconds = '00' : seconds < 10 ? seconds = '0' + seconds : '';
    return hours.toString() + ':'  + minutes.toString() + ':' + seconds.toString()
}
