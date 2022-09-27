/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let newNode = new ListNode();
    let cur = newNode;
    let ceiling = 0;

    while (true) {
        if (l1 === null && l2 === null) {
            if (ceiling === 1) {
                cur.next = new ListNode(1);
            }
            break;
        }

        let value;
        if (l1 === null) value = l2.val + ceiling;
        else if (l2 === null) value = l1.val + ceiling;
        else value = l1.val + l2.val + ceiling;

        if (value > 9) {
            value = value - 10;
            ceiling = 1;
        } else {
            ceiling = 0;
        }

        cur.next = new ListNode(value);
        cur = cur.next;

        if (l1 === null) l2 = l2.next;
        else if (l2 === null) l1 = l1.next;
        else {
            l1 = l1.next;
            l2 = l2.next;
        }
    }

    return newNode.next;
};
