import java.util.Scanner;

public class second {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt();
        
        while (T-- > 0) {
            int D = scanner.nextInt();
            int I = scanner.nextInt();
            int K = 1;
            
            for (int i = 0; i < D - 1; i++) {
                if (I % 2 == 0) {
                    K = 2 * K + 1;
                    I /= 2;
                } else {
                    K = 2 * K;
                    I = I / 2 + 1;
                }
            }
            
            System.out.println(K);
        }
        
        scanner.close();
    }
}
