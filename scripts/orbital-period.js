// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.reduce((data,element) => {
    let obj = {name: '', orbitalPeriod: ''}
    obj.orbitalPeriod = 2*Math.PI*Math.pow(Math.pow(earthRadius,3)/GM,1/2);
    obj.name = element.name;
    data.push(obj);
    return data
  },[]);
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])