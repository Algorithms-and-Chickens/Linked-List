class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 == null || l2 == null) {
        return null;
    }
    
    const dummyHead = new ListNode(0);

    let current = dummyHead;

    let carry = 0;
    while (l1 !== null || l2 !== null || carry > 0) {
        if (l1) {
            carry += l1.val;
            l1 = l1.next
        }
        if (l2) {
            carry += l2.val;
            l2 = l2.next
        }
        current.next = new ListNode(carry%10);
        current = current.next;
        carry = Math.floor(carry / 10);

    }
    return dummyHead.next;
};

// Test case
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
const result = addTwoNumbers(l1, l2);
console.log(result); 