/**
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
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
 * @return {number}
 */

let inorder = (tree, arr, state) => {
    if (tree.left !== null) {
        inorder(tree.left, arr, state + 1);
    }
    arr.push([tree.val, state]);
    if (tree.right !== null) {
        inorder(tree.right, arr, state + 1);
    }
};

var maxDepth = function (root) {
    if (root === null) return 0;
    let arr = [];
    inorder(root, arr, 1);
    let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        answer = Math.max(arr[i][1], answer);
    }

    return answer;
};
