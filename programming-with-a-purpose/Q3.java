public class Q3 {
    public static void calc(int n) {
        if (n <= 0)
            return;
        StdOut.println(n);
        calc(n - 2);
        calc(n - 3);
        StdOut.println(n);
    }

    public static void main(String[] args) {
        int n = Integer.parseInt(args[0]);
        calc(n);
    }
}
