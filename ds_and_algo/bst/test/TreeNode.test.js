const TreeNode = require('../TreeNode');
const chai = require('chai');
const expect = chai.expect;

describe('BST TreeNode test', () => {
    let node;
    it('should initialize an empty TreeNode', () => {
        node = new TreeNode();
        expect(typeof node).to.equal('object');
    });
});
