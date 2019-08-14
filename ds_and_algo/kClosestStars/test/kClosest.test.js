const kClosest = require('../kClosest');
const chai = require('chai');
const expect = chai.expect;

describe('kClosest test', () => {
    let arr;
    it('should work for 10 stars', () => {
        arr = kClosest(makeStars(), 10, 10);
        expect(arr.length).to.equal(10);
    });

    it('should work for 10000 stars', () => {
        arr = kClosest(makeStars(), 10, 10000);
        expect(arr.length).to.equal(10);
    });
});

function* makeStars() {
    while(true) {
        yield([getRandomInt(1000), getRandomInt(1000),getRandomInt(1000)]);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
