/*
    In a 2 dimensional array grid, each value grid[i][j] represents the height of a
building located there. We are allowed to increase the height of any number of buildings,
by any amount (the amounts can be different for different buildings).
Height 0 is considered to be a building as well.

At the end, the "skyline" when viewed from all four directions of the grid,
i.e. top, bottom, left, and right, must be the same as the skyline of the original grid.
A city's skyline is the outer contour of the rectangles formed by all the buildings
when viewed from a distance. See the following example.

What is the maximum total sum that the height of the buildings can be increased?

Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation:
The grid is:
[ [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]

Notes:

1 < grid.length = grid[0].length <= 50.
All heights grid[i][j] are in the range [0, 100].
All buildings in grid[i][j] occupy the entire grid cell: that is,
they are a 1 x 1 x grid[i][j] rectangular prism.

*/

function maxIncreaseKeepingSkyline(grid) {
    /* build your arrays of max heights for each row
    and each column. */
    const [maxRows, maxCols] = maxHeights(grid);
    let sum = 0; // instantiate sum
    for (let row = 0; row < grid.length; row++) { // loop through grid
        for (let col = 0; col < grid.length; col++) {
            /* The reason we calculate the min is because the building
            can never be greater than the minimum of the tallest building
            for that row and that column. If it were to be greater, it would
            change how the skyline looks on one side of the grid. */
            const building = grid[row][col], // current cell
                  min = Math.min(maxRows[row], maxCols[col]);
            sum += min - building; /* add the difference of what we're increasing
            the height to be and what the height is now */
        }
    }
    return sum;
}

function maxHeights(grid) { // helper function to find the max heights for rows and cols
    const maxRows = (new Array(grid.length)).fill(0), // start our arrays with zeroes filled in
          maxCols = (new Array(grid.length)).fill(0);
    for (let row = 0; row < grid.length; row++) {
        maxRows[row] = Math.max(...grid[row]); // find the max value of that row
        for (let col = 0; col < grid.length; col++) {
            maxCols[col] = Math.max( // find max of
                maxCols[col], // the current max of this column and
                grid[row][col] // the current building
            )
        }
    }
    return [maxRows, maxCols] // return tuple
}
