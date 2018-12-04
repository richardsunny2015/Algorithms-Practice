const ccPartTwo = require('../advent-of-code/ccPartTwo')
const {expect} = require('chai')

describe('ccPartTwo', () => {
    it('returns a number', () => {
        expect(ccPartTwo([+1, -1])).to.be.a('number')
    })
    it('returns the correct number', () => {
        expect(ccPartTwo([+1, -1])).to.equal(0)
    })
    it('can handle harder tests', () => {
        expect(ccPartTwo([
            +3,
            +3,
            +4,
            -2,
            -4
        ])).to.equal(10)
    })
})
