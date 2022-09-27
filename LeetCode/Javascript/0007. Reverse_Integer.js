/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let number = String(x);

    if (number[0] === "-") {
        let temp = number.substring(1);
        temp = temp.split("").reverse().join("");
        temp = Number("-" + temp);
        return temp < -(2 ** 31) ? 0 : temp;
    } else {
        number = number.split("").reverse().join("");
        number = Number(number);
        return number > 2 ** 31 - 1 ? 0 : number;
    }
};
