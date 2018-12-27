const numOfIslands = grid => {
  let counter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        counter++;
        dfs(grid, row, col); // start search at current land mass
      }
    }
  }
  return counter;
};

const dfs = (grid, row, col) => {
    // check for out of bounds
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
  const value = grid[row][col];
  if (value === '1') {
    grid[row][col] = '0'; // change value to 0 from 1
    dfs(grid, row - 1, col); // check adjacent top
    dfs(grid, row, col - 1); // check adjacent left
    dfs(grid, row + 1, col); // check adjacent bottom
    dfs(grid, row, col + 1); // check adjacent right
  }
};
