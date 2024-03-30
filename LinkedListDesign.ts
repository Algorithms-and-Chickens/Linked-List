class Node {
    val: number;
    next: Node | null;
    prev: Node | null;

    constructor(val: number, next: Node | null = null, prev: Node | null = null) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class MyLinkedList {
    head: Node | null;
    tail: Node | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index: number): number {
        if (index < 0 || index >= this.length) return -1;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }
        return current!.val;
    }

    addAtHead(val: number): void {
        const newNode = new Node(val, this.head, null);
        if (this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.length++;
    }

    addAtTail(val: number): void {
        const newNode = new Node(val, null, this.tail);
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
        this.length++;
    }

    addAtIndex(index: number, val: number): void {
        if (index < 0 || index > this.length) return;

        if (index === 0) {
            this.addAtHead(val);
            return;
        }

        if (index === this.length) {
            this.addAtTail(val);
            return;
        }

        let current = this.head;
        for (let i = 0; i< index - 1; i++) {
            current = current!.next;
        }

        const newNode = new Node(val, current!.next, current);
        current!.next!.prev = newNode;
        current!.next = newNode;
        this.length++;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.length) return;

        if (index === 0) {
            this.head = this.head!.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null; // List became empty
            }
            this.length--;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current!.next;
        }

        if (current!.next) {
            current!.next.prev = current!.prev;
        } else {
            this.tail = current!.prev; // If deleting the last node, update the tail.
        }

        if (current!.prev) {
            current!.prev.next = current!.next;
        }

        this.length--;
    }
}