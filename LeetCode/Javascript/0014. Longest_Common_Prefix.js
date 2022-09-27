/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let answer = "";

    for (let i = 0; i < strs[0].length; i++) {
        let ch = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (ch !== strs[j][i]) {
                return answer;
            }
        }

        answer += strs[0][i];
    }
    return answer;
};
