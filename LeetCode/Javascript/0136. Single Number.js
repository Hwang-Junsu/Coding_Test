/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const stack = [];

  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (stack.length && stack[stack.length - 1] === nums[i]) {
      stack.pop();
    } else {
      stack.push(nums[i]);
    }
  }

  return stack[0];
};
