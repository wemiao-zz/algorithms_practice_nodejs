const bfs = require('../bfs');
const chai = require('chai');
const expect = chai.expect;

describe('bfs test', () => {
    let distance;
    it('should find bfs for a simple maze', () => {
        distance = bfs([0,0], [0,0],[[0, 0], [0, 0], [0, 0]]);
        expect(distance).to.equal(0);
    });

    it('should find bfs for a not possible maze', () => {
        distance = bfs([0,0], [1,1],[[0, 1], [1, 0], [0, 0]]);
        expect(distance).to.equal(-1);
    });
});
