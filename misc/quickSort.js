function quickSort(arr) {
    // helper with will mutate arr and sort
    quickSortHelper(arr, 0, arr.length - 1);
    return arr;
  }

  function quickSortHelper(arr, left, right) {
    // base case
    if (left >= right) return ;
    let mid = Math.floor((left + right) / 2);
    let pivot = arr[mid];
    // return an idx that we can use to partition.
    let partitionIdx = partition(arr, left, right, pivot);
    // call recursively on everything left of partitionIdx
    quickSortHelper(arr, left, partitionIdx - 1);
    // call everything on right and including partitionIdx
    quickSortHelper(arr, partitionIdx, right);
  }

  function partition(arr, left, right, pivot) {
    // find left that is >= pivot and find right that is <= pivot.\
    while (left <= right) {

      while (arr[left] < pivot) {
        left++;
      }

      while (arr[right] > pivot) {
        right--;
      }
    // if u find it swap the values. left++, right--
      if (left <= right) {
        swap(arr, left, right);
        left++;
        right--;
      }
    }
    return left;
  }

  function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
