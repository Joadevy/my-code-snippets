export function parseInt(string) {
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
  const arr = string
    .toLowerCase()
    .split(" ")
    .filter((number) => number === "thousand" || number === "hundred");
  console.log(arr);

  //   const arr = string
  //     .toLowerCase()
  //     .split(/-| | and /)
  //     .filter((numbStr) => numbStr !== "");
  //   console.log(arr);
  //   if (arr.includes("hundred") && !arr.includes("thousand")) {
  //     return arr.reduce((number, numberInString, index, array) => {
  //       if (numberInString === "hundred") {
  //         number += map[numberInString];
  //         if (array[index - 1] || array[index + 1]) {
  //           if (array[index - 1]) {
  //             number += map[array[index - 1]] * map[numberInString];
  //           }
  //           if (array[index + 1] && array[index + 2]) {
  //             number += map[arr[index + 1]] + map[arr[index + 2]];
  //           } else if (array[index + 1]) {
  //             number += map[arr[index + 1]];
  //           }
  //         }
  //       }
  //       return number;
  //     }, 0);
  //   } else if (!arr.includes("hundred") && arr.includes("thousand")) {
  //     return arr.reduce((number, numberInString, index, array) => {
  //       if (numberInString === "thousand") {
  //         number += map[numberInString];
  //         if (array[index - 1] || array[index + 1]) {
  //           if (array[index - 1]) {
  //             number += map[array[index - 1]] * map[numberInString];
  //           }
  //           if (array[index + 1] && array[index + 2] && array[index + 3]) {
  //             number +=
  //               map[arr[index + 1]] + map[arr[index + 2]] + map[arr[index + 3]];
  //           } else if (array[index + 1] && array[index + 2]) {
  //             number += map[arr[index + 1]] + map[arr[index + 2]];
  //           } else if (arr[index + 1]) {
  //             number += map[arr[index + 1]];
  //           }
  //         }
  //       }
  //       return number;
  //     }, 0);
  //   } else if (arr.includes("million")) {
  //     return 1000000;
  //   } else {
  //     return arr.reduce((number, numberInString) => {
  //       number += map[numberInString];
  //       return number;
  //     }, 0);
  //   }
}

console.log(parseInt("thousand hundred fifty hundred five"));
// hundred => 100 / 999
// thousand hundred =>  1100 - 99100
// hundred thousand => 100000 - 999999

// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
