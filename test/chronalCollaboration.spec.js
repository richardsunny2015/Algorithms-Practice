const { expect } = require('chai')
const chronalCollaboration = require('../advent-of-code/chronalCollaboration')

describe('chronalCollaboration', () => {
    it('returns a number', () => {
        expect(chronalCollaboration('')).to.be.a('number')
    })
})
