import java.util.Arrays;

public class BarChartRacer {
    public static void main(String[] args) {
        StdDraw.setCanvasSize(1000, 700);
        StdDraw.enableDoubleBuffering();
        String fileName = args[0];
        int k = Integer.parseInt(args[1]);
        In file = new In(fileName);
        String title = file.readLine();
        String xAxis = file.readLine();
        String source = file.readLine();
        BarChart chart = new BarChart(title, xAxis, source);
        while (file.hasNextLine()) {
            chart.reset();
            file.readLine(); // empty space
            int n = Integer.parseInt(file.readLine());
            Bar[] barList = new Bar[n];
            for (int i = 0; i < n; i++) {
                String[] line = file
                    .readLine()
                    .split(",");
                Bar bar = new Bar(line[1], Integer.parseInt(line[3]), line[4]);
                barList[i] = bar;
                if (i == 0) chart.setCaption(line[0]);
            }
            Arrays.sort(barList);
            for (int i = barList.length - 1; i >= barList.length - k; i--) {
                Bar bar = barList[i];
                chart.add(bar.getName(), bar.getValue(), bar.getCategory());
            }
            chart.draw();
            StdDraw.show();
            StdDraw.pause(100);
            StdDraw.clear();
        }
    }
}
