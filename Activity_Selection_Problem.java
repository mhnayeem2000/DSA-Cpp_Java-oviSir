
import java.io.*;
import java.lang.*;
import java.util.*;
class ActivitySelection {
	public static void printMaxActivities(int s[], int f[],	int n)
	{
		int i, j;
		System.out.println("Following activities are selected :");
		i = 0;
		System.out.print(i + " ");
		for (j = 1; j < n; j++) {
			if (s[j] >= f[i]) {
				System.out.print(j + " ");
				i = j;
			}
		}
	}
	public static void main(String[] args)
	{
		int s[] = { 5, 1, 3, 0, 5, 8 };
		int f[] = { 9, 2, 4, 6, 7, 9 };
		Arrays.sort(f);
		int n = s.length;

		printMaxActivities(s, f, n);
	}
}
