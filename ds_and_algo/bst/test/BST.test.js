const BST = require('../BST');
const chai = require('chai');
const expect = chai.expect;

describe('BST test', () => {
    let bst, value;

    it('should initialize an empty BST', () => {
        bst = new BST();
        expect(typeof bst).to.equal('object');
        expect(bst.getHeight()).to.equal(0);
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

    it('should get height and return true for this balanced BST', () => {
        bst = new BST();
        bst.insert(5);
        bst.insert(10);
        bst.insert(13);
        bst.insert(8);
        bst.insert(3);
        bst.insert(2);
        bst.insert(4);
        expect(bst.inOrder()).to.deep.equal([2,3,4,5,8,10,13]);
        expect(bst.getHeight()).to.equal(3);
        expect(bst.find(2)).to.be.true;
        expect(bst.isBalanced()).to.be.true;
    });

    it('should throw an exception when trying to insert two equal length nodes', () => {
        bst = new BST();
        expect(bst.find(20)).to.be.false; // find for an empty tree should return false
        bst.insert(2);
        try {
            bst.insert(2);
        } catch (err) {
            expect(err.toString()).to.equal('Error: equal node values not implemented yet');
        }
    });

    it('should get height and return false for this unbalanced BST', () => {
        bst = new BST();
        bst.insert(1);
        bst.insert(2);
        bst.insert(3);
        bst.insert(4);
        bst.insert(5);
        expect(bst.inOrder()).to.deep.equal([1,2,3,4,5]);
        expect(bst.getHeight()).to.equal(5);
        expect(bst.find(4)).to.be.true;
        expect(bst.find(2)).to.be.true;
        expect(bst.find(10)).to.be.false;
        expect(bst.find(0)).to.be.false;
        expect(bst.isBalanced()).to.be.false;
    });

    it('should get height and return false for this unbalanced BST', () => {
        bst = new BST();
        bst.insert(5);
        bst.insert(4);
        bst.insert(3);
        bst.insert(2);
        bst.insert(1);
        expect(bst.inOrder()).to.deep.equal([1,2,3,4,5]);
        expect(bst.getHeight()).to.equal(5);
        expect(bst.find(5)).to.be.true;
        expect(bst.find(2)).to.be.true;
        expect(bst.find(1)).to.be.true;
        expect(bst.find(10)).to.be.false;
        expect(bst.isBalanced()).to.be.false;
    });
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
