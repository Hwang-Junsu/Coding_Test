/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let answer = 0;
  let isBlank = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      isBlank = true;
      continue;
    }
    if (s[i] !== " " && isBlank) {
      isBlank = false;
      answer = 1;
      continue;
    }
    if (s[i] !== " " && !isBlank) {
      answer++;
      continue;
    }
  }
  return answer;
};
