const Queue = require('../queue');
const chai = require('chai');
const expect = chai.expect;

describe('queue test', () => {
    let queue, value;
    it('should initialize an empty queue', () => {
        queue = new Queue();
        expect(queue.empty()).to.equal(true);
    });

    it('should return null for dequeueing an empty queue', () => {
        value = queue.dequeue();
        expect(value).to.be.null;
        expect(queue.peek()).to.be.null;
        expect(queue.size()).to.equal(0);
    });

    it('should push an element into the queue', () => {
        queue.enqueue(5);
        expect(queue.empty()).to.equal(false);
        expect(queue.peek()).to.equal(5);
        expect(queue.size()).to.equal(1);
    });

    it('should push an element into the queue (size 2)', () => {
        queue.enqueue(7);
        expect(queue.peek()).to.equal(5);
        expect(queue.size()).to.equal(2);
    });

    it('should push an element into the queue (size 3)', () => {
        queue.enqueue(10);
        expect(queue.empty()).to.equal(false);
        expect(queue.peek()).to.equal(5);
        expect(queue.size()).to.equal(3);
    });

    it('should remove an element from the queue (size 2)', () => {
        value = queue.dequeue();
        expect(value).to.equal(5);
        expect(queue.empty()).to.equal(false);
        expect(queue.peek()).to.equal(7);
        expect(queue.size()).to.equal(2);
    });

    it('should remove an elements until empty (returning correct values for FIFO)', () => {
        value = queue.dequeue();
        expect(value).to.equal(7);
        value = queue.dequeue();
        expect(value).to.equal(10);
        expect(queue.empty()).to.equal(true);
        expect(queue.peek()).to.be.null;
        expect(queue.size()).to.equal(0);
    });
});
