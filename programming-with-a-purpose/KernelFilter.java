public class Huntingtons {
    private static boolean isCAG(String dna, int i) {
        if (i + 3 > dna.length()) return false;
        return dna.substring(i, i + 3).equals("CAG");
    }
    public static int maxRepeats(String dna) {
        int i = dna.indexOf("CAG");
        if (i < 0) return 0;
        int maxRepeats = 0;
        while (i < dna.length()) {
            int count = 0;
            int currentI = i;
            for (int j = i; j < dna.length(); j += 3) {
                i = j;
                if (isCAG(dna, j)) {
                    count++;
                } else {
                    break;
                }
            }
            maxRepeats = Math.max(maxRepeats, count);
            if (i == currentI) i++;
        }
        return maxRepeats;
    }
    public static String removeWhitespace(String s) {
        return s.replace(" ", "")
            .replace("\t", "")
            .replace("\n", "");
    }
    public static String diagnose(int maxRepeats) {
        if (maxRepeats <= 9) return "not human";
        if (maxRepeats <= 35) return "normal";
        if (maxRepeats <= 39) return "high risk";
        if (maxRepeats <= 180) return "Huntington's";
        return "not human";
    }
    public static void main(String[] args) {
        String file = args[0];
        In in = new In(file);
        String dna = removeWhitespace(in.readAll());
        int repeats = maxRepeats(dna);
        StdOut.println(String.format("max repeats = %d", repeats));
        StdOut.println(diagnose(repeats));
    }
}
