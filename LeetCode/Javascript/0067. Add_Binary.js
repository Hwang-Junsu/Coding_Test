/*
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let answer = [];
  let length = Math.max(a.length, b.length);
  a = a.padStart(length, "0");
  b = b.padStart(length, "0");
  let ceiling = false;
  for (let i = length - 1; i >= 0; i--) {
    if (ceiling) {
      if (a[i] === "1" && b[i] === "1") {
        answer = ["1", ...answer];
        ceiling = true;
      } else if (a[i] !== b[i]) {
        ceiling = true;
        answer = ["0", ...answer];
      } else {
        answer = ["1", ...answer];
        ceiling = false;
      }
    } else {
      if (a[i] === "1" && b[i] === "1") {
        ceiling = true;
        answer = ["0", ...answer];
      } else if (a[i] !== b[i]) {
        answer = ["1", ...answer];
        ceiling = false;
      } else {
        answer = ["0", ...answer];
        ceiling = false;
      }
    }
    if (i === 0 && ceiling) answer = ["1", ...answer];
  }
  return answer.join("");
};
