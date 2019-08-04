const Node = require('../Node');
const chai = require('chai');
const expect = chai.expect;

describe('BST Node test', () => {
    let node;
    it('should initialize an empty Node', () => {
        node = new Node();
        expect(typeof node).to.equal('object');
    });
});
