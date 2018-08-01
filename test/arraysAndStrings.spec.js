const {expect} = require('chai');
const {isUnique, checkPerm} = require('../cracking-the-coding-interview/arraysAndStrings');

describe('isUnique', () => {
    it('should return a boolean', () => {
        expect(isUnique('test')).to.be.a('boolean');
    })
    it('should return true if characters are unique', () => {
        expect(isUnique('bop it')).to.be.true;
        expect(isUnique('omg')).to.be.be.true;
        expect(isUnique('hola')).to.be.be.true;
    })
    it('should return false if there are repeating characters', () => {
        expect(isUnique('hahahahahaah')).to.be.false;
        expect(isUnique('this is a test')).to.be.false;
    })
})

describe('checkPerm', () => {
    it('returns a boolean', () => {
        expect(checkPerm('yah', 'woo')).to.be.a('boolean');
    })
    it('returns true if one string is a permutation of the other', () => {
        expect(checkPerm('hola', 'loha')).to.be.true;
        expect(checkPerm('haha', 'ahah')).to.be.true;
        expect(checkPerm('super duper', 'druspe rupe')).to.be.true;
    })
    it('returns false if one is not a permutation of the other', () => {
        expect(checkPerm('hola', 'nope')).to.be.false;
        expect(checkPerm('yayaya', ' ')).to.be.false;
    })
})
