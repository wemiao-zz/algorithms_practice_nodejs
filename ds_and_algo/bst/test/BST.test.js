const BST = require('../BST');
const chai = require('chai');
const expect = chai.expect;

describe('BST test', () => {
    let bst, value;

    it('should initialize an empty BST', () => {
        bst = new BST();
        expect(typeof bst).to.equal('object');
    });

    it('should create a random tree and compare sorted array with inorder traversal', () => {
        let set = new Set();
        let values = [];
        for (let i = 0; i < 1000; i++) {
            value = getRandomInt(10000);
            if (!set.has(value)) {
                bst.insert(value);
                set.add(value);
                values.push(value);
            }
        }
        values.sort((a, b) => a - b);
        for (let val of values) {
            expect(bst.find(val)).to.equal(true);
        }
        expect(bst.inOrder()).to.deep.equal(values);
    });
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
