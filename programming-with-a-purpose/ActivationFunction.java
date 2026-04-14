public class ActivationFunction {
    public static double heaviside(double x) {
        if (Double.isNaN(x)) return Double.NaN;
        if (x < 0) return 0;
        if (x == 0) return 0.5;
        return 1;
    }
    public static double sigmoid(double x) {
        if (Double.isNaN(x)) return Double.NaN;
        return 1 / (1 + Math.exp(-x));
    }
    public static double tanh(double x) {
        if (Double.isNaN(x)) return Double.NaN;
        return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
    }
    public static double softsign(double x) {
        if (Double.isNaN(x)) return Double.NaN;
        return x / (1 + Math.abs(x));
    }
    public static double sqnl(double x) {
        if (Double.isNaN(x)) return Double.NaN;
        if (x <= -2) return -1;
        if (x > -2 && x < 0) 
            return x + (Math.pow(x, 2) / 4);
        if (x >= 0 && x < 2)
            return x - (Math.pow(x, 2) / 4);
        return 1;
    }
    public static void main(String[] args) {
        double x = Double.parseDouble(args[0]);

        StdOut.println("heaviside(" + x + ") = " + heaviside(x));
        StdOut.println("sigmoid(" + x + ") = " + sigmoid(x));
        StdOut.println("tanh(" + x + ") = " + tanh(x));
        StdOut.println("softsign(" + x + ") = " + softsign(x));
        StdOut.println("sqnl(" + x + ") = " + sqnl(x));
    }
}
