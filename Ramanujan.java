public class Ramanujan {
    public static boolean isRamanujan(long n) {
        long b = 0;
        boolean aFound = false;
        boolean cFound = false;
        for (long tempA = 1; tempA <= Math.cbrt(n); tempA++) {
            long aCubed = tempA * tempA * tempA;
            long tempB = (long) Math.cbrt(n - aCubed);
            long bCubed = (tempB * tempB * tempB);
            boolean isRamNum = (aCubed + bCubed) == n;
            if (isRamNum && !aFound) {
                b = tempB;
                aFound = true;
            } else if (isRamNum && tempA != b) {
                cFound = true;
                break;
            }
        }
        return aFound && cFound;
    }
    public static void main(String[] args) {
        long n = Long.parseLong(args[0]);
        StdOut.println(isRamanujan(n));
    }
}
