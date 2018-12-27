const mergeSortedArrays = (arr1, arr2) => {
  return (function merge(arr1, arr2, mergedArray) {
    if (!arr1.length || !arr2.length) {
      let leftovers = arr1.length ? arr1 : arr2;
      return mergedArray.concat(leftovers);
    }
    if (arr1[0] <= arr2[0]) {return merge(arr1.slice(1), arr2, mergedArray.concat([arr1[0]]));}
    else {return merge(arr1, arr2.slice(1), mergedArray.concat([arr2[0]]));}
  })(arr1, arr2, []);
};

const tripleStepMaker = fn => {
  const memo = {}
  return num => {
    if (memo.hasOwnProperty(num)) return memo[num]
    memo[num] = fn(num)
    return memo[num]
  }
}

const tripleStep = tripleStepMaker(num => {
  if (num < 0) return 0
  if (num === 0) return 1
  return tripleStep(num - 1) + tripleStep(num - 2) + tripleStep(num - 3)
})

module.exports = { mergeSortedArrays, tripleStep };
