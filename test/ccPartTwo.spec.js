const ccPartTwo = require('../advent-of-code/ccPartTwo')
const {expect} = require('chai')

describe('ccPartTwo', () => {
    it('returns a number', () => {
        expect(ccPartTwo(['+1', '-1'])).to.be.a('number')
    })
})
