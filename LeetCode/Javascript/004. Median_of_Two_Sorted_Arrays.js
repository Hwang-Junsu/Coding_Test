/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2);
  arr.sort((a, b) => a - b);

  if (arr.length % 2 === 1) {
    return arr[parseInt(arr.length / 2)];
  }
  return (
    (arr[parseInt(arr.length / 2) - 1] + arr[parseInt(arr.length / 2)]) / 2
  );
};
