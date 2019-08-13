const BST = require('./BST');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function printBST(size = 20) {
    const bst = new BST();
    let set = new Set();
    let value;
    let values = [];
    for (let i = 0; i < size; i++) {
        value = getRandomInt(size * 10);
        if (!set.has(value)) {
            bst.insert(value);
            set.add(value);
            values.push(value);
        }
    }
    bst.printTree();
    console.log(bst.isBalanced());
}

process.argv.length > 2 ? printBST(process.argv[2]) : printBST();
