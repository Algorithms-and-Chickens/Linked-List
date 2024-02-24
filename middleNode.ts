/**
 * 876. Middle of the Linkedlist
 * Topics: LinkedList, Two Points
 * Given the head of a singly linked list, return the middle node of the linked list.
* If there are two middle nodes, return the second middle node.
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    let fast = head;
    let slow = head;

    while (fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};