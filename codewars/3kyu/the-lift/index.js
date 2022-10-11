export const theLift = function (queues, capacity) {
  const historyFloors = [];
  let liftQueue = [];
  let actualFloor = 0;
  let godown = false;

  // If the flat queue of the building if empty => there's no people waiting for the lift.
  while (
    (queues.flat().length || liftQueue.length) &&
    actualFloor < queues.length &&
    actualFloor >= 0
  ) {
    if (queues[actualFloor].length > 0) {
      console.log(queues[actualFloor]);
      enterLift(queues[actualFloor], liftQueue, capacity);
      historyFloors.push(actualFloor);
    }
    if (liftQueue.length && liftQueue.includes(actualFloor)) {
      liftQueue = liftQueue.filter((person) => person !== actualFloor);
      historyFloors.push(actualFloor);
    }

    if (
      actualFloor >= maxFloorToGo(queues.flat()) &&
      actualFloor >= maxFloorToGo(liftQueue.flat())
    )
      godown = true;
    // else if (actualFloor <= minFloorToGo(queues.flat())) godown = false;
    godown ? actualFloor-- : actualFloor++;
  }
  historyFloors.push(0);
  historyFloors.unshift(0);
  return historyFloors;
};

function enterLift(peopleInFloor, liftQueue, capacity) {
  while (liftQueue.length < capacity && peopleInFloor.length) {
    liftQueue.push(peopleInFloor.shift());
  }
}

function maxFloorToGo(queue) {
  return queue.reduce((max, floor) => {
    floor > max ? (max = floor) : "";
    return max;
  }, 0);
}

function minFloorToGo(queue) {
  return queue.reduce((min, floor) => {
    floor < min ? (min = floor) : "";
    return min;
  }, queue.length);
}

// function goUp(liftQueue, actualfloor, targetFloor, capacity) {
//   for (let floor = actualfloor; floor <= targetFloor; floor++) {
//     if (floor.length > 0) {
//       enterLift(floor, liftQueue, capacity);
//     }
//   }
// }

let queues = [
  [], // G
  [4], // 1
  [3, 3, 3], // 2
  [], // 3
  [2, 5], // 4
  [], // 5
  [], // 6
];
// console.log(maxFloorToGo(queues.flat()));

console.log(theLift(queues, 5));
// .toMatchObject([0, 2, 5, 0]);
