const distinctSubsequences = (str, target) => { // rabbbit & rabbit
  const arr = new Array(target.length).fill(0); // create array that represents target
  for (let i = 0; i < str.length; i++) { // loop through str
    const currentLetter = str[i]; //
    for (let j = target.length - 1; j >= 0; j--) { // loop backwards through target
      const targetLetter = target[j];
      // if matching and j is greater than 0 (AKA it's not the first letter) add the previous count to the current one
      // otherwise if matching and is 0, it's equal to 1
      if (targetLetter === currentLetter) arr[j] += j > 0 ? arr[j - 1] : 1;
    }
  }
  return arr[target.length - 1]; // return the last element of the array
};

// EXAMPLE:
// 'r' 't' 0
// 'r' 'i' 0
// 'r' 'b' 0
// 'r' 'b' 0
// 'r' 'a' 0
// 'r' 'r' 1 (cause j === 0)

// 'a' 't' 0
// 'a' 'i' 0
// 'a' 'b' 0
// 'a' 'b' 0
// 'a' 'a' 1
// 'a' 'r' 1

// 'b' 't' 0
// 'b' 'i' 0
// 'b' 'b' 0
// 'b' 'b' 1
// 'b' 'a' 1
// 'b' 'r' 1

// 'b' 't' 0
// 'b' 'i' 0
// 'b' 'b' 1
// 'b' 'b' 2
// 'b' 'a' 1
// 'b' 'r' 1

// 'b' 't' 0
// 'b' 'i' 0
// 'b' 'b' 3
// 'b' 'b' 3
// 'b' 'a' 1
// 'b' 'r' 1

// 'i' 't' 0
// 'i' 'i' 3
// 'i' 'b' 3
// 'i' 'b' 3
// 'i' 'a' 1
// 'i' 'r' 1

// 't' 't' 3
// 't' 'i' 3
// 't' 'b' 3
// 't' 'b' 3
// 't' 'a' 1
// 't' 'r' 1
