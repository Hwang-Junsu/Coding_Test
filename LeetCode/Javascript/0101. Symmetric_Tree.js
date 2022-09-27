/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
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
 * @return {boolean}
 */

let inorder = (tree, arr, state) => {
    if (tree.left !== null) {
        inorder(tree.left, arr, "left");
    }
    arr.push([tree.val, state]);
    if (tree.right !== null) {
        inorder(tree.right, arr, "right");
    }
};

var isSymmetric = function (root) {
    let state = "none";
    let arr = [];
    inorder(root, arr, state);

    if (arr.length % 2 === 0) return false;

    let center = parseInt(arr.length / 2);

    for (let i = 0; i < center; i++) {
        for (let j = 0; j < 2; j++) {
            if (
                arr[i][0] !== arr[arr.length - 1 - i][0] ||
                arr[i][1] === arr[arr.length - 1 - i][1]
            )
                return false;
        }
    }

    return true;
};
