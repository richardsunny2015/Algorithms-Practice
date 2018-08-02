const { expect } = require('chai');
const {
  isUnique,
  checkPerm,
  urlify,
  paliPerm,
  oneAway
} = require('../cracking-the-coding-interview/arraysAndStrings');

xdescribe('isUnique', () => {
  it('should return a boolean', () => {
    expect(isUnique('test')).to.be.a('boolean');
  });
  it('should return true if characters are unique', () => {
    expect(isUnique('bop it')).to.be.true;
    expect(isUnique('omg')).to.be.be.true;
    expect(isUnique('hola')).to.be.be.true;
  });
  it('should return false if there are repeating characters', () => {
    expect(isUnique('hahahahahaah')).to.be.false;
    expect(isUnique('this is a test')).to.be.false;
  });
});

xdescribe('checkPerm', () => {
  it('returns a boolean', () => {
    expect(checkPerm('yah', 'woo')).to.be.a('boolean');
  });
  it('returns true if one string is a permutation of the other', () => {
    expect(checkPerm('hola', 'loha')).to.be.true;
    expect(checkPerm('haha', 'ahah')).to.be.true;
    expect(checkPerm('super duper', 'druspe rupe')).to.be.true;
  });
  it('returns false if one is not a permutation of the other', () => {
    expect(checkPerm('hola', 'nope')).to.be.false;
    expect(checkPerm('yayaya', ' ')).to.be.false;
  });
});

xdescribe('urlify', () => {
  it('returns a string', () => {
    expect(urlify('yah girl')).to.be.a('string');
  });
  it('returns URLified string for two words', () => {
    expect(urlify('hello bob')).to.equal('hello%20bob');
    expect(urlify('goodbye sam')).to.equal('goodbye%20sam');
  });
  it('returns URLified version of three or more words', () => {
    expect(urlify('see you later alligator')).to.equal(
      'see%20you%20later%20alligator'
    );
    expect(
      urlify('been far too long in the midnight sea oh what is becoming of me')
    ).to.equal(
      'been%20far%20too%20long%20in%20the%20midnight%20sea%20oh%20what%20is%20becoming%20of%20me'
    );
  });
});

xdescribe('paliPerm', () => {
  it('returns a boolean', () => {
    expect(paliPerm('yah')).to.be.a('boolean');
  });
  it('returns true for strings that could be palindromes', () => {
    expect(paliPerm('rraacce')).to.be.true;
    expect(paliPerm('sttsa')).to.be.true;
  });
  it('returns false for non-palindrome permutations', () => {
    expect(paliPerm('hello')).to.be.false;
    expect(paliPerm('goodbye')).to.be.false;
  });
});

describe('oneAway', () => {
  it('returns a boolean', () => {
    expect(oneAway('beat', 'bet')).to.be.a('boolean');
  });
  it('returns true for strings that need one character insert', () => {
    expect(oneAway('bet', 'beat')).to.be.true;
    expect(oneAway('yah', 'yeah')).to.be.true;
  });
  it('returns true for strings that need one character removed', () => {
    expect(oneAway('beat', 'bet')).to.be.true;
    expect(oneAway('yeah', 'yah')).to.be.true;
  });
  it('returns true for strings that need one character replaced', () => {
    expect(oneAway('beat', 'best')).to.be.true;
    expect(oneAway('yeas', 'yeah')).to.be.true;
  });
  it('returns false for strings that need more than one edit', () => {
    expect(oneAway('beat', 'beat it')).to.be.false;
    expect(oneAway('howdy', 'hello')).to.be.false;
  });
});
