public class Q2 {
    public static int calc(int n)
    {
        if (n <= 0) return 1;
        return 1 + calc(n-2) + calc(n-3);
    }
    public static void main(String[] args) {
        int n = Integer.parseInt(args[0]);
        System.out.println(calc(n));
    }
}
