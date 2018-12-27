const numOfIslands = grid => {
  let counter = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        counter++;
        dfs(grid, row, col);
      }
    }
  }
  return counter;
};

const dfs = (grid, row, col) => {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return;
  const value = grid[row][col];
  if (value === '1') {
    grid[row][col] = '0';
    dfs(grid, row - 1, col);
    dfs(grid, row, col - 1);
    dfs(grid, row + 1, col);
    dfs(grid, row, col + 1);
  }
};
