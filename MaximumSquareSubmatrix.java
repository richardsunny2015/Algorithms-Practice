public class MaximumSquareSubmatrix {
    private static int[][] readSquare(int n) {
        int[][] square = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int x = StdIn.readInt();
                square[i][j] = x;
            }
        }
        return square;
    }
    
    public static int size(int[][] a) {
        int count = 0;
        int[][] square = new int[a.length][a.length];
        // copy first row and colomn
        for (int i = 0; i < square.length; i++) {
            square[0][i] = a[0][i]; // first row
            square[i][0] = a[i][0]; // first column
        }
        for (int row = 1; row < a.length; row++) {
            for (int col = 1; col < a.length; col++) {
                if (a[row][col] == 0) continue;
                int min = Math.min(
                    Math.min(
                        square[row - 1][col - 1], // diagonal left
                        square[row - 1][col]), // above
                    square[row][col-1]); // left
                int val = min + 1;
                square[row][col] = val;
                count = Math.max(count, val);
            }
        }
        return count;
    }
    public static void main(String[] args) {
        int n = StdIn.readInt();
        int[][] a = readSquare(n);
        StdOut.println(size(a));
    }
}
