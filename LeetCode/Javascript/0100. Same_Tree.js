/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
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
 * @param {TreeNode} p
 * @param {TreeNode} q
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

var isSameTree = function (p, q) {
    if (p === null && q === null) return true;
    if (p !== null && q === null) return false;
    if (p === null && q !== null) return false;

    let arr1 = [];
    let arr2 = [];
    let state = "none";

    inorder(p, arr1, state);
    inorder(q, arr2, state);

    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < 2; j++) {
            if (arr1[i][j] !== arr2[i][j]) return false;
        }
    }
    return true;
};
