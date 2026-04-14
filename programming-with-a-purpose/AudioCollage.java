public class AudioCollage {
    public static double[] amplify(double[] a, double alpha) {
        double[] result = new double[a.length];
        for (int i = 0; i < a.length; i++) {
            result[i] = a[i] * alpha;
        }
        return result;
    }
    public static double[] reverse(double[] a) {
        int i = 0;
        double[] result = new double[a.length];
        for (int j = a.length - 1; j >= 0; j--) {
            result[i] = a[j];
            i++;
        }
        return result;
    }
    public static double[] merge(double[] a, double[] b) {
        double[] result = new double[a.length + b.length];
        for (int i = 0; i < a.length; i++) {
            result[i] = a[i];
        }
        for (int i = 0; i < b.length; i++) {
            result[i + a.length] = b[i];
        }
        return result;
    }
    public static double[] mix(double[] a, double[] b) {
        int longest;
        if (a.length > b.length)
            longest = a.length;
        else longest = b.length;
        double[] result = new double[longest];
        for (int i = 0; i < longest; i++) {
            if (i >= a.length) result[i] = b[i];
            else if (i >= b.length) result[i] = a[i];
            else result[i] = a[i] + b[i];
        }
        return result;
    }
    public static double[] changeSpeed(double[] a, double alpha) {
        int n = (int) (a.length / alpha);
        double[] result = new double[n];
        for (int i = 0; i < n; i++) {
            result[i] = a[(int) (alpha * i)];
        }
        return result;
    }

    public static void main(String[] args) {
        double[] harp = StdAudio.read("harp.wav");
        double[] beatbox = StdAudio.read("beatbox.wav");
        double[] piano = StdAudio.read("piano.wav");
        double[] cow = StdAudio.read("cow.wav");
        double[] singer = StdAudio.read("singer.wav");

        double[] cowSingerMix = mix(cow, singer);
        double[] pianoDoubleTime = changeSpeed(piano, 2);
        double[] amplifyHarp = amplify(harp, 1.5);
        double[] reverseBeatBox = reverse(beatbox);
        
        double[] finalSong = merge(merge(cowSingerMix, pianoDoubleTime), merge(amplifyHarp, reverseBeatBox));

        StdAudio.play(finalSong);
    }
}
