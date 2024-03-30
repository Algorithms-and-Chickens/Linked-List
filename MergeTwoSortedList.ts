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
//TC:O(m + n) or Max(m,n)
//SC: O(1)
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(0);
    let current = dummyHead;

    while(list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        //move
        current = current.next
    }

    current.next = list1 !== null ? list1 : list2;

    return dummyHead.next;
};