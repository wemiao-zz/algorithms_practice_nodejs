const MinHeap = require('../MinHeap');
const chai = require('chai');
const expect = chai.expect;

describe('minHeap ', () => {
    let heap, value;
    it('should create a minHeap', () => {
        heap = new MinHeap();
        expect(heap.empty()).to.be.true;
    });

    it('should build a heap and peek to be true', () => {
        heap = new MinHeap([5, 2, 10, 3, 15, 30]);
        heap.buildHeap();
        expect(heap.getLength()).to.equal(6);
        expect(heap.getArray()).to.deep.equal([2, 3, 10, 5, 15, 30]);
        expect(heap.peek()).to.equal(2);
    });

    it('should insert and pop some elements', () => {
        heap.insert(6);
        heap.insert(8);
        value = heap.pop();
        expect(value).to.equal(2);
        value = heap.pop();
        expect(value).to.equal(3);
        value = heap.pop();
        expect(value).to.equal(5);
        value = heap.pop();
        expect(value).to.equal(6);
        value = heap.pop();
        expect(value).to.equal(8);
        value = heap.pop();
        expect(value).to.equal(10);
        value = heap.pop();
        expect(value).to.equal(15);
        value = heap.pop();
        expect(value).to.equal(30);
        expect(heap.empty()).to.be.true;
        value = heap.pop();
        expect(value).to.equal(-1);
        expect(heap.peek()).to.equal(-1);
    });
});
