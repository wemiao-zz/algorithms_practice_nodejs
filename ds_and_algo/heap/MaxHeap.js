// this is a max heap
module.exports = class MaxHeap {
    constructor(arr = []) {
        this.arr = arr;
    }

    // helper to find left child, right child, or parent
    findNode(i, type) {
        switch(type) {
            case 'left':
                return (2 * i) + 1;
            case 'right':
                return (2 * i) + 2;
            case 'parent':
                return Math.floor((i - 1) / 2);
        }
    }

    // build heap from bottom up, slight optimization from top down, as we can skip all leaf nodes
    buildHeap() {
        for(let i = Math.floor(this.arr.length / 2) - 1; i >= 0; i --) {
            this.siftDown(i);
        }
    }

    // sift node down heap
    siftDown(i) {
        const arr = this.arr;
        const leftChild = this.findNode(i, 'left');
        const rightChild = this.findNode(i, 'right');

        // leftChild is outside array bounds, so node is a leaf node
        if (leftChild >= arr.length) {
            return;
        }

        // rightChild is outside array bounds, so only compare against left child
        if (rightChild >= arr.length) {
            // do the swap, since right child is out of bounds, we are done processing and have reached the bottom of the heap
            if (arr[i] < arr[leftChild]) {
                this.swap(i, leftChild);
            }
            return;
        // both leftChild and rightChild exist, so this case means root is greater than or equal to left child and right child, so heap is correct, no more action is necessary
        } else if (arr[i] >= arr[leftChild] && arr[i] >= arr[rightChild]) {
            return;
        // if we reach here, root MUST be less than either leftChild, rightChild, or possibly both
        // this is left child greater than right child case
        } else if (arr[leftChild] > arr[rightChild]) {
            this.swap(i, leftChild);
            return this.siftDown(leftChild);
        }
        // right child must be greater than (or equal to) left child, so swap right child and recurse downward
        this.swap(i, rightChild);
        return this.siftDown(rightChild);
    }

    // peek at top value
    peek() {
        return this.arr.length > 0 ? this.arr[0] : -1;
    }

    getLength() {
        return this.arr.length;
    }

    // helper to swap, for sifting methods
    swap(a, b) {
        let tmp = this.arr[a];
        this.arr[a] = this.arr[b];
        this.arr[b] = tmp;
    }

    getArray() {
        return this.arr;
    }

    // insert a value at end of heap, then sift it up
    insert(value) {
        this.arr.push(value);
        this.siftUp(this.arr.length - 1);
    }

    // keep sifting up and recursing as necessary
    siftUp(i) {
        const parValue = this.findNode(i, 'parent');
        if (this.arr[i] > this.arr[parValue]) {
            this.swap(i, parValue);
            this.siftUp(parValue);
        }
    }

    // is the heap empty ?
    empty() {
        return this.arr.length === 0;
    }

    // remove a value from top of array, swap last element with root, sift element down, then return the old root
    pop() {
        const arr = this.arr;
        if (arr.length === 0) {
            return -1;
        }
        const popValue = arr[0];
        arr[0] = arr[arr.length - 1];
        arr.pop();
        this.siftDown(0);
        return popValue;
    }
};
