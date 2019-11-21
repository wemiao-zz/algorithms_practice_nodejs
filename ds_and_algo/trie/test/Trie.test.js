const Trie = require('../Trie').Trie;
const chai = require('chai');
const expect = chai.expect;

describe('Trie', () => {
    it('basic True test', () => {
        let trie = new Trie(["bobby", "alex","bob","ales","alexander","alexandra", "charlie", "zed"]);
        expect(trie.find("bobby")).to.be.true;
        expect(trie.find("ken")).to.be.false;
        expect(trie.find("alexander")).to.be.true;
        expect(trie.find("alexandra")).to.be.true;
        expect(trie.find("zed")).to.be.true;
        expect(trie.find("joker")).to.be.false;
    });
});
