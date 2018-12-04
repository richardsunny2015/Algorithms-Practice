const {expect} = require('chai')
const {ims} = require('../advent-of-code/day2')

describe('ims', () => {
    it('returns a number', () => {
        expect(ims(['aa', 'bbb'])).to.be.a('number')
    })
    it('returns the right number', () => {
        expect(ims(['aa', 'bbb'])).to.equal(1)
    })
    it('can handle harder inputs', () => {
        expect(ims([
            'abcdef',
            'bababc',
            'abbcde',
            'abcccd',
            'aabcdd',
            'abcdee',
            'ababab'
        ]))
        .to.equal(12)
    })
})
