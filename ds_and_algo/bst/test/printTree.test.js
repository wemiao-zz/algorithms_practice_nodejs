const printTree = require('../printTree');
const chai = require('chai');
const expect = chai.expect;

describe('printTree simple test', () => {
    it('should print a small tree', () => {
        let size = printTree(5);
        expect(size).to.equal(5);
    });

    it('should print a default tree', () => {
        let size = printTree();
        expect(size).to.equal(10);
    });

    it('should print a nonRandom tree', () => {
        let size = printTree(5, false);
        expect(size).to.equal(5);
    });
});
