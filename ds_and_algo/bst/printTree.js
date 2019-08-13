const BST = require('./BST');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = function printBST(size = 10, rand = true) {
    const bst = new BST();
    let set = new Set();
    let value;
    let values = [];
    let sizeRand = rand ? size * 10 : (size / 2);
    for (let i = 0; i < size; i++) {
        value = getRandomInt(sizeRand);
        if (!set.has(value)) {
            bst.insert(value);
            set.add(value);
            values.push(value);
        }
    }
    bst.printTree();
    return size;
};
