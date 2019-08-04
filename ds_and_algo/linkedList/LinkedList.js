const Node = require('./Node');

module.exports = class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }

    // add a value to the beginning of the linked list
    prepend(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }

        let cur = this.head;
        this.head = node;
        node.next = cur;
    }

    // add a value to the end of the linked list
    append(value) {
        const node = new Node(value);

        if (this.tail === null) {
            this.head = node;
            this.tail = node;
            return;
        }

        let cur = this.tail;
        this.tail = node;
        cur.next = node;
    }

    // peek at the front of the list (returns null for empty list)
    peekHead() {
        return this.head ? this.head.value : this.head;
    }

    // peek at the back of the list (returns null for empty list)
    peekTail() {
        return this.tail ? this.tail.value : this.tail;
    }

    size() {
        let cur = this.head;
        let size = 0;
        while (cur !== null) {
            size++;
            cur = cur.next;
        }
        return size;
    }

    removeFront() {
        if (this.size() === 0) {
            return null;
        }
        let cur = this.head;
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        }
        return cur.value;
    }

    printList() {
        let cur = this.head;
        let output = '';
        while (cur !== null) {
            output += `${cur.value} `;
            cur = cur.next;
        }
        return output;
    }
};
