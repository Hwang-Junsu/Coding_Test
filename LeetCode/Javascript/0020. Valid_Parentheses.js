/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
Example 1:

Input: s = "()"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    [...s].forEach((ch) => {
        if (stack.length === 0) {
            stack.push(ch);
        } else {
            if (stack.at(-1) === "(" && ch === ")") {
                stack.pop();
            } else if (stack.at(-1) === "{" && ch === "}") {
                stack.pop();
            } else if (stack.at(-1) === "[" && ch === "]") {
                stack.pop();
            } else stack.push(ch);
        }
    });
    if (stack.length === 0) return true;
    return false;
};
