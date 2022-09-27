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

let inorder = function (root, arr) {
    if (root === null) return;
    if (root.left !== null) {
        inorder(root.left, arr);
    }
    arr.push(root.val);
    if (root.right !== null) {
        inorder(root.right, arr);
    }
};

var inorderTraversal = function (root) {
    let answer = [];
    inorder(root, answer);
    return answer;
};
