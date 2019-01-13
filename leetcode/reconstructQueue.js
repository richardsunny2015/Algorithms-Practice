// Suppose you have a random list of people standing in a queue.
// Each person is described by a pair of integers (h, k),
// where h is the height of the person and k is the number of people
// in front of this person who have a height greater than or equal to h.
// Write an algorithm to reconstruct the queue.

var reconstructQueue = function(people) {
  let finalArr = [];
  people.sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]));
  // sort the people by their height in descending order
  // unless they are the same height, then sort them in ascending
  // order by how many people in front of them are
  // taller or of equal height to them
  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    finalArr.splice(person[1], 0, person); // insert person
    // by using the amount of peole taller or of equal height
    // as the index in which to insert from
  }
  return finalArr;
};
