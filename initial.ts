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

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

function push(new_data: number) {
    let new_node = new ListNode(new_data);
    new_node.next = head;
    head = new_node;
    return head;
}

function insertAfter(new_data: number) {
    let new_node = new ListNode(new_data);
    new_node.next = head.next;
    head.next = new_node.next;
    return head;
}

//Lưu ý rằng last chỉ là một tham chiếu đến nút trong danh sách, và việc thay đổi giá trị của last không làm thay đổi giá trị của head. Tuy nhiên, do last và head cùng trỏ đến cùng một danh sách liên kết, khi bạn thay đổi nút thông qua last, thì thực chất bạn đang thay đổi trực tiếp nút trong danh sách liên kết mà head cũng đang trỏ đến.
function append(new_data: number) {
    let new_node = new ListNode(new_data);
    new_node.next = null;
    let last = head;
    while (last.next != null) {
        last = last.next;
    }

    last.next = new_node;
    return head;
}



const testing = append(6);
console.log(testing) ;  
console.log('ffff');