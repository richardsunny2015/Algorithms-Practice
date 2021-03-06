// --- Day 2: Inventory Management System ---
// You stop falling through time, catch your breath, and check the screen on the device. "Destination reached. Current Year: 1518. Current Location: North Pole Utility Closet 83N10." You made it! Now, to find those anomalies.

// Outside the utility closet, you hear footsteps and a voice. "...I'm not sure either. But now that so many people have chimneys, maybe he could sneak in that way?" Another voice responds, "Actually, we've been working on a new kind of suit that would let him fit through tight spaces like that. But, I heard that a few days ago, they lost the prototype fabric, the design plans, everything! Nobody on the team can even seem to remember important details of the project!"

// "Wouldn't they have had enough fabric to fill several boxes in the warehouse? They'd be stored together, so the box IDs should be similar. Too bad it would take forever to search the warehouse for two similar box IDs..." They walk too far away to hear any more.

// Late at night, you sneak to the warehouse - who knows what kinds of paradoxes you could cause if you were discovered - and use your fancy wrist device to quickly scan every box and produce a list of the likely candidates (your puzzle input).

// To make sure you didn't miss any, you scan the likely candidate boxes again, counting the number that have an ID containing exactly two of any letter and then separately counting those with exactly three of any letter. You can multiply those two counts together to get a rudimentary checksum and compare it to what your device predicts.

// For example, if you see the following box IDs:

// abcdef contains no letters that appear exactly two or three times.
// bababc contains two a and three b, so it counts for both.
// abbcde contains two b, but no letter appears exactly three times.
// abcccd contains three c, but no letter appears exactly two times.
// aabcdd contains two a and two d, but it only counts once.
// abcdee contains two e.
// ababab contains three a and three b, but it only counts once.
// Of these box IDs, four of them contain a letter which appears exactly twice, and three of them contain a letter which appears exactly three times. Multiplying these together produces a checksum of 4 * 3 = 12.

// What is the checksum for your list of box IDs?

const ims = boxIds => {
  // loop through ids
  // loop through individual id
  // keep count of letter instances in lookup table
  // loop through lookup table to see if a letter appears twice or 3 times
  // increment twice and thrice counter if applies
  // multiply twice and thrice counters
  let twice = 0;
  let thrice = 0;
  for (let i = 0; i < boxIds.length; i++) {
    const lookupTable = {};
    const boxId = boxIds[i];
    let isTwice = false;
    let isThrice = false;
    for (let j = 0; j < boxId.length; j++) {
      const letter = boxId[j];
      if (lookupTable.hasOwnProperty(letter)) lookupTable[letter]++;
      else lookupTable[letter] = 1;
    }
    for (let key in lookupTable) {
      if (lookupTable.hasOwnProperty(key)) {
        if (isThrice && isTwice) break;
        if (lookupTable[key] === 3) isThrice = true;
        if (lookupTable[key] === 2) isTwice = true;
      }
    }
    if (isThrice) thrice++
    if (isTwice) twice++
  }
  return thrice * twice
};

// --- Part Two ---
// Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.

// The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:

// abcde
// fghij
// klmno
// pqrst
// fguij
// axcye
// wvxyz
// The IDs abcde and axcye are close, but they differ by two characters (the second and fourth). However, the IDs fghij and fguij differ by exactly one character, the third (h and u). Those must be the correct boxes.

// What letters are common between the two correct box IDs? (In the example above, this is found by removing the differing character from either ID, producing fgij.)

const ims2 = boxIds => {
    // loop through boxIds
    // loop through the rest of the boxIds
    // compare outer boxId with inner boxId
    // count differences and keep track of the index of last difference
    // if difference is more than one, break out of inner loop;
    // after loop finishes, if difference is one, return str.slice(0, index) + str.slice(index+1)
    for (let i = 0; i < boxIds.length; i++) {
        const word = boxIds[i]
        for (let j = i + 1; j < boxIds.length; j++) {
            const wordToCompare = boxIds[j]
            let differences = 0;
            let lastIndexOfDifference = -1
            for (let k = 0; k < wordToCompare.length; k++) {
                if (wordToCompare[k] !== word[k]) {
                    differences++
                    lastIndexOfDifference = k
                }
                if (differences > 1) break;
            }
            if (differences === 1) return wordToCompare.slice(0, lastIndexOfDifference) + wordToCompare.slice(lastIndexOfDifference + 1)
        }
    }
}

module.exports = { ims, ims2 };
