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

const longestIncreasingPath = (matrix) => {
    if (!matrix.length) return 0;
    let cache = []
    for (let i = 0; i < matrix.length; i++) {
        const row = (new Array(matrix[i].length)).fill(0)
        cache.push(row)
    }
    let max = -Infinity;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            max = Math.max(max, dfs(-Infinity, row, col, matrix, cache));
        }
    }
    console.log(cache)
    return max;
};

const dfs = (target, row, col, matrix, cache) => {
    if (row < 0
        || col < 0
        || row >= matrix.length
        || col >= matrix[row].length
        || matrix[row][col] <= target) return 0;
    const curr = matrix[row][col];
    if (cache[row][col]) return cache[row][col];
    cache[row][col] = 1 + Math.max(dfs(curr, row - 1, col, matrix, cache)
                       , dfs(curr, row, col - 1, matrix, cache)
                       , dfs(curr, row + 1, col, matrix, cache)
                       , dfs(curr, row, col + 1, matrix, cache));
    return cache[row][col];
};
