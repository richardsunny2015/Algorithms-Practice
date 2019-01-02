function knapsackProblem(items, capacity) {
  // Write your code here.
  const matrix = []; // create a matrix
  for (let i = 0; i < items.length + 1; i++) {
    const row = new Array(capacity + 1).fill(0); // fill matrix with zeros
    matrix.push(row);
  }
  for (let r = 1; r < matrix.length; r++) {
    const [value, weight] = items[r - 1]; // rows represent items
    for (let c = 0; c < matrix[r].length; c++) {
      // columns represent capacity
      if (weight <= c) {
        // if the weight of an item is less than or equal to capacity
        matrix[r][c] = Math.max(
          matrix[r - 1][c],
          matrix[r - 1][c - weight] + value
        ); // set the value at given indices to the max of the value in the row above and the value of the current item plus the max value of the leftover space
      } else {
        matrix[r][c] = matrix[r - 1][c]; // set current to value above
      }
    }
  }
  return [matrix[items.length][capacity], getItems(matrix, items)];
}

function getItems(matrix, items) {
  const sequence = []; // create a sequence
  let r = matrix.length - 1; // set row index to the very last row
  let c = matrix[r].length - 1; // set col index to the very last column
  while (r > 0) { // while the row is greater than 0
    if (matrix[r][c] > matrix[r - 1][c]) { // if the current value is greater than the value above
      sequence.unshift(r - 1); // add index of the item aka row - 1
      c -= items[r - 1][1]; // c is equal to c - the weight of the item
    }
    r--; // no matter what, we decrement row
    if (c <= 0) break; // if c is equal to zero, we can break out of the loop
  }
  return sequence;
}
