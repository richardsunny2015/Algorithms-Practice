public class RevesPuzzle {
    public static String moveStr = "Move disc %d from %s to %s";
    public static int count = 0;

    public static void hanoi(int n, int end, String from, String temp, String to) {
        if (n == end) return;
        hanoi(n - 1, end, from, to, temp);
        StdOut.println(String.format(moveStr, n, from, to));
        hanoi(n - 1, end, temp, from, to);
    }
    public static void reve(int n, String from, String temp1, String temp2, String to) {
        if (n == 0) return;
        int k = (int) Math.round((n + 1 - Math.sqrt(2 * n + 1)));
        reve(k, from, to, temp2, temp1);
        hanoi(n, k, from, temp2, to); // do something
        reve(k, temp1, from, temp2, to);
        

    }
    public static void main(String[] args) {
        int n = Integer.parseInt(args[0]);
        reve(n, "A", "B", "C", "D");
    }
}
