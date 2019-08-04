const LinkedList = require('../LinkedList');
const chai = require('chai');
const expect = chai.expect;

describe('Linked List test', () => {
    let list, value;
    it('should initialize an empty linked list', () => {
        list = new LinkedList();
        expect(typeof list).to.equal('object');
        expect(list.size()).to.equal(0);
    });

    it('removeFront should return null for removing from empty list', () => {
        value = list.removeFront();
        expect(value).to.be.null;
        expect(list.peekHead()).to.be.null;
        expect(list.peekTail()).to.be.null;
        expect(list.size()).to.equal(0);
    });

    it('prepend should add an entry to beginning of empty list', () => {
        list.prepend(10);
        expect(list.peekHead()).to.equal(10);
        expect(list.peekTail()).to.equal(10);
    });

    it('removeFront should remove an entry from beginning of list (creates empty list)', () => {
        value = list.removeFront();
        expect(value).to.equal(10);
        expect(list.peekHead()).to.be.null;
        expect(list.peekTail()).to.be.null;
    });

    it('append should add an entry to end of empty list', () => {
        list.append(5);
        expect(list.peekHead()).to.equal(5);
        expect(list.peekTail()).to.equal(5);
    });

    it('append should add an entry to end of list (now size 2)', () => {
        list.append(7);
        expect(list.peekTail()).to.equal(7);
        expect(list.printList()).to.equal('5 7 ');
    });

    it('prepend should add an entry to beginning of list (now size 3)', () => {
        list.prepend(8);
        expect(list.peekHead()).to.equal(8);
        expect(list.printList()).to.equal('8 5 7 ');
        expect(list.size()).to.equal(3);
    });

    it('append should add an entry to end of list (now size 4)', () => {
        list.append(15);
        expect(list.peekTail()).to.equal(15);
        expect(list.printList()).to.equal('8 5 7 15 ');
        expect(list.size()).to.equal(4);
    });

    it('removeFront should remove an entry from the front of the list (size 3)', () => {
        value = list.removeFront();
        expect(value).to.equal(8);
        expect(list.peekHead()).to.equal(5);
        expect(list.printList()).to.equal('5 7 15 ');
        expect(list.size()).to.equal(3);
    });

    it('removeFront should successfully empty a list on successive calls and set head and tail pointer to null', () => {
        value = list.removeFront();
        expect(value).to.equal(5);
        value = list.removeFront();
        expect(value).to.equal(7);
        value = list.removeFront();
        expect(value).to.equal(15);
        expect(list.peekHead()).to.be.null;
        expect(list.peekTail()).to.be.null;
        expect(list.printList()).to.equal('');
        expect(list.size()).to.equal(0);
    });
});
