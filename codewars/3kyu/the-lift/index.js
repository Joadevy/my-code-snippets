// Need a queue for tracking the people waiting for the lift

export const theLift = function (queues, capacity) {
  const liftQueue = [];
  for (let floor of queues) {
    if (floor.length > 0) {
      enterLift(floor, liftQueue, capacity);
    }
  }

  return liftQueue;
};

function enterLift(peopleInFloor, liftQueue, capacity) {
  while (liftQueue.length < capacity && peopleInFloor.length) {
    liftQueue.push(peopleInFloor.shift());
  }
}

let queues = [
  [], // G
  [], // 1
  [5, 5, 5], // 2
  [], // 3
  [], // 4
  [], // 5
  [], // 6
];
console.log(theLift(queues, 5));
// .toMatchObject([0, 2, 5, 0]);
