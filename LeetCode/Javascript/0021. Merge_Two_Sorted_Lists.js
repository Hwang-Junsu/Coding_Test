/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.


Example 1:

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
    let newList = new ListNode(); // 리스트를 연결할 새로운 노드를 만든다.
    let cur = newList; //현재 가리키는 값. 현재는 head에 위치함.
    while (true) {
        if (list1 === null && list2 === null) {
            break;
        }
        if (list1 === null || list2 === null) {
            if (list1 === null) {
                cur.next = list2;
                list2 = list2.next;
            } else if (list2 === null) {
                cur.next = list1;
                list1 = list1.next;
            }
        } else {
            if (list1.val <= list2.val) {
                cur.next = list1;
                list1 = list1.next;
            } else {
                cur.next = list2;
                list2 = list2.next;
            }
        }
        cur = cur.next;
    }

    return newList.next;
};
