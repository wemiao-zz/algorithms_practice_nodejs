const BST = require('./BST');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function printBST() {
    const bst = new BST();
    let set = new Set();
    let value;
    let values = [];
    for (let i = 0; i < 50; i++) {
        value = getRandomInt(100);
        if (!set.has(value)) {
            bst.insert(value);
            set.add(value);
            values.push(value);
        }
    }
    bst.printTree();
}

printBST();
