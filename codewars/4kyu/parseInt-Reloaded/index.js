const map = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred: 100,
  thousand: 1000,
  million: 1000000,
};
export function parseInt(string) {
  const arr = string
    .toLowerCase()
    .split(/-| and | /)
    .filter((numbStr) => numbStr !== "");

  if (arr.includes("hundred") && !arr.includes("thousand")) {
    return getNumber("hundred", arr);
  } else if (!arr.includes("hundred") && arr.includes("thousand")) {
    return getNumber("thousand", arr);
  } else if (arr.includes("hundred") && arr.includes("thousand")) {
    const condition = arr.filter(
      (number) => number === "thousand" || number === "hundred"
    );
    if (condition.length === 3 && condition[1] === "thousand") {
      return (
        getNumberUntil("hundred", arr, "thousand") * 1000 +
        getNumber("hundred", arr.slice(arr.indexOf("thousand") + 1, arr.length))
      );
    } else if (condition.length === 2 && condition[0] === "thousand") {
      return (
        getNumberBefore("thousand", arr) +
        getNumberAfter("thousand", arr, "hundred")
      );
    } else if (condition.length === 2 && condition[0] === "hundred") {
      return (
        getNumberBefore("hundred", arr) * 1000 +
        getNumberAfter("thousand", arr, "thousand") -
        1000
      );
    }
  } else if (arr.includes("million")) {
    return 1000000;
  } else {
    return arr.reduce((number, numberInString) => {
      number += map[numberInString];
      return number;
    }, 0);
  }
}

function getNumber(value, arr) {
  const index = arr.indexOf(value);
  const before = arr.slice(0, index);
  const after = arr.slice(index + 1, arr.length);
  const prod = before.reduce((number, stringNumber) => {
    return (number += map[stringNumber]);
  }, 0);
  const sum = after.reduce((number, stringNumber) => {
    return (number += map[stringNumber]);
  }, 0);
  if (prod) {
    return prod * map[value] + sum;
  }
  return map[value] + sum;
}

function getNumberUntil(value, arr, until) {
  const index = arr.indexOf(value);
  const before = arr.slice(0, index);
  const after = arr.slice(index + 1, arr.indexOf(until));
  const prod = before.reduce((number, stringNumber) => {
    return (number += map[stringNumber]);
  }, 0);
  const sum = after.reduce((number, stringNumber) => {
    return (number += map[stringNumber]);
  }, 0);
  if (prod) {
    return prod * map[value] + sum;
  }
  return map[value] + sum;
}

function getNumberBefore(value, arr) {
  const index = arr.indexOf(value);
  const before = arr.slice(0, index);
  const prod = before.reduce((number, stringNumber) => {
    return (number += map[stringNumber]);
  }, 0);

  if (prod) return prod * map[value];
  return map[value];
}

function getNumberAfter(value, arr, target) {
  const index = arr.indexOf(value);
  const after = arr.slice(index + 1, arr.length);
  console.log(after);
  return getNumber(target, after);
}

// console.log(
// parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
// );

// console.log(parseInt("ninety-nine thousand one hundred"));
// console.log(parseInt("ninety-nine thousand fifty"));
// console.log(parseInt("ninety thousand one hundred twenty-five"));
// console.log(parseInt("one thousand one hundred"));
// console.log(parseInt("seven hundred thousand"));
// console.log(parseInt("two hundred thousand three")); // => 200003
console.log(parseInt("two hundred three thousand")); // 203000

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919

// hundred => 100 / 999
// thousand hundred =>  1100 - 99100
// hundred thousand => 100000 - 999999
