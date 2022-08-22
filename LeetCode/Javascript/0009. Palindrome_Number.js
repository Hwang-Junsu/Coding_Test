/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let num = x + "";
  let isPalin = true;
  for (let i = 0; i < num.length / 2; i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      isPalin = false;
      break;
    }
  }
  return isPalin;
};
