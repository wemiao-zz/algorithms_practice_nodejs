const digitalRoot = require('../digitalRoot');
const chai = require('chai');
const expect = chai.expect;

describe('digital root test', () => {
    let res;
    it('should return number less than 10 as that number', () => {
        res = digitalRoot(9);
        expect(res).to.equal(9);
    });

    it('should return 999 to be 9', () => {
        res = digitalRoot(999);
        expect(res).to.equal(9);
    });

    it('should return 103 to be 4', () => {
        res = digitalRoot(103);
        expect(res).to.equal(4);
    });

    it('should return 728934 to be 6', () => {
        res = digitalRoot(728934);
        expect(res).to.equal(6);
    });
});
