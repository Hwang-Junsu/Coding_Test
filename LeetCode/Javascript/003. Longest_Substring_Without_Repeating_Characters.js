/*
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let answer = 0;
    let max = 0;
    let container = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (container.includes(s[j])) {
                container = [];
                max = Math.max(answer, max);
                answer = 0;
                break;
            } else {
                container.push(s[j]);
                answer++;
            }
        }
    }
    max = Math.max(answer, max);

    return max;
};
