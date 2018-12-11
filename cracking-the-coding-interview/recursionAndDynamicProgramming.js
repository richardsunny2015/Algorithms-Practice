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

const tripleStep = num => {

}

module.exports = { mergeSortedArrays, tripleStep };
