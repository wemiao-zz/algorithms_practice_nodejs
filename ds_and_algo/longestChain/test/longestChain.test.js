const longestChain = require('../longestChain');
const chai = require('chai');
const expect = chai.expect;

describe('printTree simple test', () => {
    let count;
    it('should work for an empty chain', () => {
        count = longestChain([]);
        expect(count).to.equal(0);
    });

    it('should work for a simple chain', () => {
        count = longestChain(['a', 'ab', 'abc']);
        expect(count).to.equal(3);
    });

    it('should work for a non chain', () => {
        count = longestChain(['a', 'abd', 'abcas']);
        expect(count).to.equal(1);
    });

    it('should work for a longer chain', () => {
        count = longestChain(['a', 'd', 'ab', 'bd', 'cb', 'cbc', 'cc', 'zz', 'abd', 'abcd', 'cba', 'abcas', 'c', 'cd', 'cde', 'ecd']);
        expect(count).to.equal(4);
    });

    it('should work for a complex chain', () => {
        count = longestChain(['a', 'ab', 'bd', 'adb', 'abc', 'abcd', 'abcde', 'cde', 'cdef', 'fec', 'ef', 'df', 'def', 'd']);
        expect(count).to.equal(5);
    });
});
