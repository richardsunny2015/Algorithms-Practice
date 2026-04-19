public class TrinomialDP {
    public static long trinomial(int n, int k) {
        if (n == 0 && k == 0) return 1;
        if (k < -n || k > n) return 0;
        long[][] results = new long[n + 1][n + 1];
        results[0][0] = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j <= i; j++) {
                if (j == i) results[i][j] = 1;
                else {
                    int leftIndex = Math.abs(j - 1);
                    int rightIndex = j + 1;
                    long left = results[i - 1][leftIndex];
                    long right;
                    if (rightIndex > i) right = 0;
                    else right = results[i -1][rightIndex];
                    results[i][j] = left + results[i - 1][j] + right;
                }
            }
        }
        return results[n][k];
    }

    public static void main(String[] args) {
        int n = Integer.parseInt(args[0]);
        int k = Integer.parseInt(args[1]);
        StdOut.println(trinomial(n, k));
    }
}
