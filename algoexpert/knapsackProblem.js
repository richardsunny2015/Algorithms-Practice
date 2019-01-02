function knapsackProblem(items, capacity) {
    // Write your code here.
      const matrix = []
      for (let i = 0; i < items.length + 1; i++) {
          const row = (new Array(capacity + 1)).fill(0)
          matrix.push(row)
      }
      for (let r = 1; r < matrix.length; r++) {
          const [value, weight] = items[r - 1]
          for (let c = 0; c < matrix[r].length; c++) {
              if (weight <= c) {
                  matrix[r][c] = Math.max(matrix[r - 1][c], matrix[r - 1][c - weight] + value)
              } else {matrix[r][c] = matrix[r-1][c]}
          }
      }
      return [matrix[items.length][capacity], getItems(matrix, items)]
  }

  function getItems(matrix, items) {
      const sequence = []
      let r = matrix.length - 1
      let c = matrix[r].length - 1
      while (r > 0) {
          if (matrix[r][c] > matrix[r - 1][c]) {
              sequence.unshift(r - 1)
              c -= items[r - 1][1]
          }
          r--
          if (c <= 0) break
      }
      return sequence
  }
