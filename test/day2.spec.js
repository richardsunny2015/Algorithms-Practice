const {expect} = require('chai')
const {ims, ims2} = require('../advent-of-code/day2')

xdescribe('ims', () => {
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

describe('ims2', () => {
    it('returns a string', () => {
        expect(ims2(['aab', 'aac'])).to.be.a('string')
    })
    it('returns correct string', () => {
        expect(ims2(['aab', 'aac'])).to.equal('aa')
    })
    it('can handle harder inputs', () => {
        expect(ims2([
            'abcde',
            'fghij',
            'klmno',
            'pqrst',
            'fguij',
            'axcye',
            'wvxyz'
        ]))
        .to.equal('fgij')
    })
})
