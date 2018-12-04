const { expect } = require('chai')
const chronalCollaboration = require('../advent-of-code/chronalCollaboration')

describe('chronalCollaboration', () => {
    it('returns a number', () => {
        expect(chronalCollaboration('')).to.be.a('number')
    })
    it('can add positive numbers', () => {
        expect(chronalCollaboration('+2+3+4')).to.equal(9)
    })
    it('can add negative numbers', () => {
        expect(chronalCollaboration('-2-3-4')).to.equal((-9))
    })
    it('can add negative and positive numbers', () => {
        expect(chronalCollaboration('-2+5-3+7')).to.equal(7)
    })
})
