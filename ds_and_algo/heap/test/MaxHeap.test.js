const MaxHeap = require('../MaxHeap.js');
const chai = require('chai');
const expect = chai.expect;

describe('maxHeap ', () => {
    let heap, value;
    it('should create a maxHeap', () => {
        heap = new MaxHeap();
        expect(heap.empty()).to.be.true;
    });

    it('should build a heap and peek to be true', () => {
        heap = new MaxHeap([5, 2, 10, 3, 15, 30]);
        heap.buildHeap();
        expect(heap.getLength()).to.equal(6);
        expect(heap.getArray()).to.deep.equal([30, 15, 10, 3, 2, 5]);
        expect(heap.peek()).to.equal(30);
    });

    it('should insert and pop some elements', () => {
        heap.insert(6);
        heap.insert(8);
        value = heap.pop();
        expect(value).to.equal(30);
        value = heap.pop();
        expect(value).to.equal(15);
        value = heap.pop();
        expect(value).to.equal(10);
        value = heap.pop();
        expect(value).to.equal(8);
        value = heap.pop();
        expect(value).to.equal(6);
        value = heap.pop();
        expect(value).to.equal(5);
        value = heap.pop();
        expect(value).to.equal(3);
        value = heap.pop();
        expect(value).to.equal(2);
        expect(heap.empty()).to.be.true;
        value = heap.pop();
        expect(value).to.equal(-1);
        expect(heap.peek()).to.equal(-1);
    });
});
