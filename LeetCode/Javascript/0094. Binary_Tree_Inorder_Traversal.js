/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [1,3,2]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

let inorder = function (root, visited, arr) {
  if (root === null) return;
  visited[root.val] = true;

  if (root.left === null) {
    arr.push(root.val);
  }
  inorder(root.left, visited, arr);

  inorder(root.right, visited, arr);
};

var inorderTraversal = function (root) {
  let answer = [];
  let visited = new Array(101).fill(false);
  inorder(root, visited, answer);
  return answer;
};
