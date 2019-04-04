/* Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

Example 1:

Input: nums =
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].
Example 2:

Input: nums =
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed. */

const longestIncreasingPath = matrix => {
    if (!matrix.length) return 0; // check to see if matrix is empty
    let cache = [] // create a cache
    /* Our goal for the cache is to record the longest path in each cell so
       that we don't have to repeatedly call dfs for the same results.
       Each cell represents the longest path starting from that cell. It
       will always be the same no matter where the previous cell is coming from.
       This is what our cache looks like with example 1: [ [ 1, 1, 2 ],
                                                           [ 2, 2, 1 ],
                                                           [ 3, 4, 2 ] ]
       As you can see, the longest path starts at cell [2,1] */
    for (let i = 0; i < matrix.length; i++) { // Loop to create cache
        const row = (new Array(matrix[i].length)).fill(0) // row of zeroes
        cache.push(row)
    }
    let max = -Infinity; // start at -Infinity since it's the smallest number
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            max = Math.max(max, dfs(-Infinity, row, col, matrix, cache)); // max is equal to
            // the max of max and dfs called on that cell
        }
    }
    return max;
};

const dfs = (target, row, col, matrix, cache) => {
    // this function is used to recursively traverse depth-first through our matrix
    if (row < 0 // check for bounds and if the current cell is smaller than target
        || col < 0
        || row >= matrix.length
        || col >= matrix[row].length
        || matrix[row][col] <= target) return 0;
    const curr = matrix[row][col];
    if (cache[row][col]) return cache[row][col]; // if the cell is already recorded in cache, return it
    // otherwise calculate 1 plus the maximum of dfs on the surrounding cells
    // and store them in cache
    cache[row][col] = 1 + Math.max(dfs(curr, row - 1, col, matrix, cache) // traverse up
                       , dfs(curr, row, col - 1, matrix, cache) // left
                       , dfs(curr, row + 1, col, matrix, cache) // down
                       , dfs(curr, row, col + 1, matrix, cache)); // right
    return cache[row][col];
};
