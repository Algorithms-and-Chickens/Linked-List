console.log("ffff");

/**
 * Definition for singly-linked list.
 **/
class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

function getDecimalValue(head: ListNode | null): number {
    if (head === null) return 0
    let result=0;
    
    while (head) {
        result = head.val + result * 2;
        head = head.next
    }
    return result
};

const head = new ListNode(1);
head.next = new ListNode(0);
head.next.next = new ListNode(1);

const testing = getDecimalValue(head);
console.log(testing);