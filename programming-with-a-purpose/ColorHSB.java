public class ColorHSB {
    private final int h;
    private final int s;
    private final int b;

    public ColorHSB(int h, int s, int b) {
        if (h < 0 || h > 359 || s < 0 || s > 100 || b < 0 || b > 100) 
            throw new IllegalArgumentException("HSB is invalid");
        this.h = h;
        this.s = s;
        this.b = b;
    }

    public String toString() {
        return String.format("(%d, %d, %d)", h, s, b);
    }

    public boolean isGrayscale() {
        return s == 0 || b == 0;
    }
    public int distanceSquaredTo(ColorHSB that) {
        if (that == null) throw new IllegalArgumentException("`that` is null");
        int hSquared = Math.min(
            (h - that.h) * (h - that.h),
            (360 - Math.abs(h - that.h)) * (360 - Math.abs(h - that.h)));
        int sSquared = (s - that.s) * (s - that.s);
        int bSquared = (b - that.b) * (b - that.b);
        return hSquared + sSquared + bSquared;
    }

    public static void main(String[] args) {
        int targetH = Integer.parseInt(args[0]);
        int targetS = Integer.parseInt(args[1]);
        int targetB = Integer.parseInt(args[2]);
        ColorHSB target = new ColorHSB(targetH, targetS, targetB);
        int minDistance = Integer.MAX_VALUE;
        String closestName = "";
        ColorHSB closest = null;

        while(!StdIn.isEmpty()) {
            String colorName = StdIn.readString();
            int h = StdIn.readInt();
            int s = StdIn.readInt();
            int b = StdIn.readInt();
            ColorHSB colorHSB = new ColorHSB(h, s, b);
            int dist = target.distanceSquaredTo(colorHSB);
            if (dist < minDistance) {
                minDistance = dist;
                closestName = colorName;
                closest = colorHSB;
            }
        }
        if (!closestName.isEmpty() && closest != null) {
            StdOut.println(closestName + " " + closest);
        }
        
    }
}
