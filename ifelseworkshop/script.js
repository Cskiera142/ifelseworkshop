///////////////
// IS TRUTHY
///////////////

// function isTruthy(truth) {
//   if (truth === "I am a string") {
//     return true;
//   } else if (truth === false) {
//     return "The boolean value false is falsy";
//   } else if (truth === null) {
//     return "The null value is falsy";
//   } else if (truth === undefined) {
//     return "undefined is falsy";
//   } else if (truth === 0) {
//     return "The number 0 is falsy (the only falsy number)";
//   } else if (truth === "") {
//     return "The empty string is falsy (the only falsy string)";
//   }
// }

// console.log(isTruthy("I am a string"));
// console.log(isTruthy(false));
// console.log(isTruthy(null));
// console.log(isTruthy(undefined));
// console.log(isTruthy(0));
// console.log(isTruthy(""));

///////////////
// NUMBER LINE
///////////////

// function numLine(num1, num2) {
//   let sum = num1 + num2;
//   if (sum < -1000) {
//     return sum + " is less than -1000";
//   } else if (sum < 0) {
//     return sum + " is a negative number";
//   } else if (sum === 0) {
//     return sum + " is equal to 0";
//   }  else if (sum > 100) {
//     return sum + " is greater than 100";
//   } else if (sum > 0) {
//     return sum + " is larger than 0";
// }

// console.log(numLine(-1000, -1));
// console.log(numLine(-1, -1));
// console.log(numLine(0, 0));
// console.log(numLine(100, 1));
// console.log(numLine(0, 1));

///////////////
// GREATER THAN 5
///////////////

// function greaterThanFive(num1, num2) {
//   if (num1 >= 5 && num2 >= 5) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(greaterThanFive(5, 6));
// console.log(greaterThanFive(10, 11));
// console.log(greaterThanFive(0, 0));
// console.log(greaterThanFive(1000, -1000));
// console.log(greaterThanFive(6, 4));
// console.log(greaterThanFive(5, 5));

///////////////
// PAIR AND COMPARE
///////////////

// function pairAndCompare(param1A, param1B, param2A, param2B) {
//   if (param1A === param1B && param2A === param2B) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(pairAndCompare("cat", "cat", 6, "6"));
// console.log(pairAndCompare("five", 5, "dog", "dawg"));
// console.log(pairAndCompare(0, false, "horse", "horse"));
// console.log(pairAndCompare("eight", "eight", "ate", "ate"));
// console.log(pairAndCompare(11, "elevn", "four", "for"));
// console.log(pairAndCompare("cake", "cake", "pie", "pie"));
