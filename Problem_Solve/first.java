import java.util.*;

class Main {
    static int[] fx = {1, -1, 1, -1, 2, 2, -2, -2};
    static int[] fy = {2, 2, -2, -2, 1, -1, 1, -1};
    static String str1, str2;
    static boolean[][] visited = new boolean[10][10];
    static int[][] cost = new int[10][10];

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (scanner.hasNext()) {
            str1 = scanner.next();
            str2 = scanner.next();
            int sx = str1.charAt(0) - 96;
            int sy = Character.getNumericValue(str1.charAt(1));
            int dx = str2.charAt(0) - 96;
            int dy = Character.getNumericValue(str2.charAt(1));
            bfs(sx, sy, dx, dy);
        }
        scanner.close();
    }

    public static void bfs(int a, int b, int c, int d) {
        Queue<pii> q = new LinkedList<>();
        clear(visited);
        q.add(new pii(a, b));
        visited[a][b] = true;
        cost[a][b] = 0;
        while (!q.isEmpty()) {
            pii top = q.poll();
            if (top.first == c && top.second == d) {
                System.out.println("To get from " + str1 + " to " + str2 + " takes " + cost[top.first][top.second] + " knight moves.");
                return;
            }
            for (int i = 0; i < 8; i++) {
                int f = top.first + fx[i];
                int s = top.second + fy[i];

                if ((f > 0 && f <= 8) && (s > 0 && s <= 8) && !visited[f][s]) {
                    visited[f][s] = true;
                    cost[f][s] = cost[top.first][top.second] + 1;
                    q.add(new pii(f, s));
                }
            }
        }
    }

    static class pii {
        int first, second;

        public pii(int first, int second) {
            this.first = first;
            this.second = second;
        }
    }

    public static void clear(boolean[][] arr) {
        for (int i = 0; i < arr.length; i++) {
            Arrays.fill(arr[i], false);
        }
    }
}
