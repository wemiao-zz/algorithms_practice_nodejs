const BST = require('../BST');
const chai = require('chai');
const expect = chai.expect;

describe('BST test', () => {
    let bst, value;

    it('should initialize an empty BST', () => {
        bst = new BST();
        expect(typeof bst).to.equal('object');
        expect(bst.getRoot()).to.be.null;
    });

    it('should insert a value into root', () => {
        let set = new Set();
        for (let i = 0; i < 20; i++) {
            value = getRandomInt(1000);
            if (!set.has(value)) {
                bst.insert(value);
                set.add(value);
            }
        }
        bst.printTree(bst.getRoot(), null, true);
    });

    // print constructed binary tree
    //printTree(root, nullptr, false);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
