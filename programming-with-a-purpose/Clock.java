public class Clock {
    private int h;
    private int m;

    public Clock(int h, int m) {
        if (h < 0 || h > 23 || m < 0 || m > 59)
            throw new IllegalArgumentException("Incorrect hours or minutes");
        this.h = h;
        this.m = m;
    }

    public Clock(String s) {
        if (s.length() != 5) throw new IllegalArgumentException("Invalid argument");
        int h = Integer.parseInt(s.substring(0, 2));
        int m = Integer.parseInt(s.substring(3));
        if (h < 0 || h > 23 || m < 0 || m > 59)
            throw new IllegalArgumentException("Incorrect hours or minutes");
        this.h = h;
        this.m = m;
    }

    public String toString() {
        return String.format("%02d:%02d", h, m);
    }

    public boolean isEarlierThan(Clock that) {
        if (this.h < that.h) return true;
        if (this.h == that.h && this.m < that.m) return true;
        return false;
    }

    public void tic() {
        if (this.h == 23 && this.m == 59) {
            this.h = 0;
            this.m = 0;
        } else if (this.m == 59) {
            this.h++;
            this.m = 0;
        } else {
            this.m++;
        }
    }

    public void toc (int delta) {
        if (delta < 0) throw new IllegalArgumentException("delta is negative");
        int hoursToAdd = delta / 60;
        int minutesToAdd = delta % 60;
        if (this.m + minutesToAdd > 59) hoursToAdd++;
        this.h = (this.h + hoursToAdd) % 24;
        this.m = (this.m + minutesToAdd) % 60;
    }

    public static void main(String[] args) {

    }

}
