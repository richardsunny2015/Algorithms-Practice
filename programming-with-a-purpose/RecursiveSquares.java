public class RecursiveSquares {
    public static void drawSquare(double x, double y, double length) {
        StdDraw.setPenColor(StdDraw.LIGHT_GRAY);
        StdDraw.filledSquare(x, y, length/2);
        StdDraw.setPenColor(StdDraw.BLACK);
        StdDraw.square(x, y, length/2);
    }
    public static void draw(int n, double x, double y, double length) {
        if (n == 0) return;
        double halfLength = length / 2;
        draw(n - 1, x - halfLength, y + halfLength, halfLength); // top left
        draw(n - 1, x + halfLength, y + halfLength, halfLength); // top right

        drawSquare(x, y, length);
        
        draw(n - 1, x - halfLength, y - halfLength, halfLength); // bottom left
        draw(n - 1, x + halfLength, y - halfLength, halfLength); // bottom right
        
    }
    public static void main(String[] args) {
        int n = Integer.parseInt(args[0]);
        draw(n, 0.5, 0.5, 0.5);
    }
}
