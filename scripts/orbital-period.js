// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds). The values should be rounded to the nearest whole number. The body being orbited is Earth.

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.reduce((data,element) => {
    let obj = {name: '', orbitalPeriod: ''}
    obj.orbitalPeriod = Math.round(2*Math.PI*Math.pow(Math.pow(earthRadius+element.avgAlt,3)/GM,1/2));
    obj.name = element.name;
    data.push(obj);
    return data
  },[]);
}

// Testing
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
// It returns:
// [{ name: 'iss', orbitalPeriod: 5557 },
// { name: 'hubble', orbitalPeriod: 5734 },
// { name: 'moon', orbitalPeriod: 2377399 }]

// A cleaner approach:
function orbitalPeriods(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
  });
}