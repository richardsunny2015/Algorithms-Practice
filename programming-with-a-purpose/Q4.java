public class Q4 {
    private static int count = 0;
    public static void calc(int n) {
        if (n <= 0)
            return;
        StdOut.println(n);
        count++;
        calc(n - 2);
        calc(n - 3);
        StdOut.println(n);
        count++;
    }

    public static void main(String[] args) {
        int n = Integer.parseInt(args[0]);
        calc(n);
        StdOut.println("Our count " + count);
    }
}
