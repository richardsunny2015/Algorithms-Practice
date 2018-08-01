const {expect} = require('chai');
const {isUnique} = require('../cracking-the-coding-interview/arraysAndStrings');

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
