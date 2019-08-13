const ContestantList = require('../multiHandle');
const chai = require('chai');
const expect = chai.expect;

describe('ContestantList multihandle', () => {
    const list = new ContestantList();
    it('should create empty Contestant list', () => {
        expect(list.head).to.be.null;
    });

    it('should have one entry Alexander', () => {
        list.add('Alexander',  33, 74, 190);
        expect(list.sorted('A')).to.deep.equal(['Alexander']);
        expect(list.sorted('H')).to.deep.equal(['Alexander']);
        expect(list.sorted('W')).to.deep.equal(['Alexander']);
        try {
            list.sorted('XYZ');
        } catch (err) {
            expect(err.toString()).to.equal('Error: not a valid attribute');
        }
    });

    it('should fail when list of attributes does not match valid attribute length', () => {
        try {
            list.add('Tom', 22);
        } catch (err) {
            expect(err.toString()).to.equal("Error: valid attribute length doesn't equal attribute length");
        }
    });

    it('should have four entries and be correct', () => {
        list.add('Stella',     45, 66, 115);
        list.add('Marc',       38, 79, 165);
        list.add('Donnatella', 60, 72, 167);
        expect(list.sorted('A')).to.deep.equal(['Alexander', 'Marc', 'Stella', 'Donnatella']);
        expect(list.sorted('H')).to.deep.equal(['Stella', 'Donnatella', 'Alexander', 'Marc']);
        expect(list.sorted('W')).to.deep.equal(['Stella', 'Marc', 'Donnatella', 'Alexander']);
    });
});
