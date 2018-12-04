const {expect} = require('chai')
const {ims} = require('../advent-of-code/day2')

describe('ims', () => {
    it('returns a number', () => {
        expect(ims(['aa', 'bbb'])).to.be.a('number')
    })
})
