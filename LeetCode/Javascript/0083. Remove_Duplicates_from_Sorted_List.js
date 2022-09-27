/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:


Input: head = [1,1,2]
Output: [1,2]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
    let newNode = new ListNode(-101);
    let cur = newNode;

    while (true) {
        if (head === null) break;
        if (cur.val !== head.val) {
            cur.next = new ListNode(head.val);
            cur = cur.next;
        }
        head = head.next;
    }
    return newNode.next;
};
