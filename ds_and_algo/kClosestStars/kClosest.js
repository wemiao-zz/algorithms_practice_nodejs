const MaxHeap = require('../heap/MaxHeap');

module.exports = function kClosest(stars, k, n) {
    const arr = new Array(k).fill(Number.MAX_SAFE_INTEGER);
    const heap = new MaxHeap(arr);
    for(let i = 0; i < n; i++) {
        heap.insert(calculateDistance(stars.next()));
        heap.pop();
    }
    return heap.getArray();
};

function calculateDistance({value: [x,y,z]}) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
}
