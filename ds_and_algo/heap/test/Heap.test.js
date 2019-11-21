const Heap = require('../Heap').Heap;
const chai = require('chai');
const expect = chai.expect;

describe('Heap', () => {
    let heap, value;
    it('should create a Heap (min heap)', () => {
        heap = new Heap();
        expect(heap.empty()).to.be.true;
    });

    it('should build a heap and peek to be true', () => {
        heap = new Heap([{value: 5}, {value: 2}, { value: 10}, { value: 3}, {value:15 }, {value:30}]);
        heap.buildHeap();
        expect(heap.getLength()).to.equal(6);
        expect(heap.peek().value).to.equal(2);
    });

    it('should insert and pop some elements', () => {
        heap.insert({ value: 6 });
        heap.insert({ value: 8 });
        value = heap.pop().value;
        expect(value).to.equal(2);
        value = heap.pop().value;
        expect(value).to.equal(3);
        value = heap.pop().value;
        expect(value).to.equal(5);
        value = heap.pop().value;
        expect(value).to.equal(6);
        value = heap.pop().value;
        expect(value).to.equal(8);
        value = heap.pop().value;
        expect(value).to.equal(10);
        value = heap.pop().value;
        expect(value).to.equal(15);
        value = heap.pop().value;
        expect(value).to.equal(30);
        expect(heap.empty()).to.be.true;
        value = heap.pop();
        expect(value).to.equal(-1);
        expect(heap.peek()).to.equal(-1);
    });
});
