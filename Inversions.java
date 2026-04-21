public class Inversions {
    public static long count(int[] a) {
        int count = 0;
        for (int i = 0; i < a.length; i++) {
            for (int j = i + 1; j < a.length; j++) {
                if (a[i] > a[j]) count++;
            }
        }
        return count;
    }
    public static int[] generate(int n, long k) {
        int[] permutation = new int[n];
        int min = 0;
        int max = n - 1;
        for (int i = 0; i < n; i++) {
            int possibleInversions = n - 1 - i;
            if (possibleInversions <= k) {
                permutation[i] = max;
                max--;
                k -= possibleInversions;
            } else {
                permutation[i] = min;
                min++;
            }
        }
        return permutation;
    }
    public static void main(String[] args) {
        int n = Integer.parseInt(args[0]);
        long k = Long.parseLong(args[1]);
        int[] permutation = generate(n, k);
        for (int i = 0; i < permutation.length; i++) {
            StdOut.print(permutation[i] + " ");
        }
    }
}
