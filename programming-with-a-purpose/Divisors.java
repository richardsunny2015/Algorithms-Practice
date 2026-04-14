public class Divisors {
    public static int gcd(int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b > 0) {
            int oldA = a;
            a = b;
            b = oldA % b;
        }
        return a;
    }
    public static int lcm(int a, int b) {
        if (a == 0 && b == 0) return 0;
        int commonDiv = gcd(a, b);
        return (Math.abs(a) * Math.abs(b)) / commonDiv;
    }
    public static boolean areRelativelyPrime(int a, int b) {
        return gcd(a, b) == 1;
    }
    public static int totient(int n) {
        int count = 0;
        for (int i = 1; i <= n; i++) {
            if (areRelativelyPrime(i, n)) count++;
        }
        return count;
    }
    public static void main(String[] args) {
        int a = Integer.parseInt(args[0]);
        int b = Integer.parseInt(args[1]);

        StdOut.println(String.format("gcd(%d, %d) = %d", a, b, gcd(a, b)));
        StdOut.println(String.format("lcm(%d, %d) = %d", a, b, lcm(a, b)));
        StdOut.println(String.format("areRelativelyPrime(%d, %d) = %b", a, b, areRelativelyPrime(a, b)));
        StdOut.println(String.format("totient(%d) = %d", a, totient(a)));
        StdOut.println(String.format("totient(%d) = %d", b, totient(b)));
    }
}
