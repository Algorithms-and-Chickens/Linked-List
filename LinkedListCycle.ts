/**
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

 //TC: O(n)
 //SC: O(1)

 function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return false;
    }
    
    let slow: ListNode | null = head
    let fast: ListNode | null = head.next

    while (fast !== null && fast.next !== null) {
        if (slow === fast) {
            return true;
        }
        slow = slow?.next || null;
        fast = fast.next?.next;
    }

    return false;

};