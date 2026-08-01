var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
console.log(
  numbers.map(function (x) {
    return x * 2;
  })
);
//Filter - Create a new array by keeping the items that return true.
console.log(
  numbers.filter(function (x) {
    return x > 7;
  })
);
//Reduce - Accumulate a value by doing something to each item in an array.

console.log(
  numbers.reduce(function (accumulator, x) {
    return accumulator + x;
  })
);
//Find - find the first item that matches from an array.

console.log(
  numbers.find(function (x) {
    return x > 10;
  })
);

//FindIndex - find the index of the first item that matches.
console.log(
  numbers.findIndex(function (x) {
    return x > 10;
  })
);

import emojipedia from "./emojipedia";
console.log();
console.log(
  emojipedia.map(function (x) {
    return x.meaning.substring(0, 100);
  })
);
