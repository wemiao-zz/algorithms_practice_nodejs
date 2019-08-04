const LinkedList = require('../linkedList/LinkedList');

module.exports = class Queue {
    constructor() {
        this.queue = new LinkedList();
    }

    empty() {
        return this.queue.size() === 0;
    }

    enqueue(value) {
        this.queue.append(value);
    }

    dequeue() {
        return this.queue.removeFront();
    }

    peek() {
        return this.queue.peekHead();
    }

    size() {
        return this.queue.size();
    }
};
