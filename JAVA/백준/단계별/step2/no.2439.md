> **첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제<br>하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.<br>- 입력<br>첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.<br>- 출력<br>첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.** <br>

https://www.acmicpc.net/problem/2439

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdpAHIs%2FbtrAmz2gfZ8%2F2kwvmEJlJ0JRPg18xNPJz0%2Fimg.png "Q")

![A](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdySASx%2FbtrAnFnLuZT%2FWaETmpE19Y187otORlQuLk%2Fimg.png "A")

	N이 5라고 가정했을 경우<br>
▶ i가 1일때<br>
- j가 1일 경우 : 공백 1번 출력 → 4번(N-i번) 반복<br>
- k가 1일 경우 : * 1번 출력 → (i번) <br>
▶ i가 2일때<br>
- j가 1일 경우 : 공백 1번 출력 → 3번(N-i번) 반복<br>
- k가 1일 경우 : * 1번 출력 → 2번(i번) 반복 <br>
▶ i가 3일때<br>
- j가 1일 경우 : 공백 1번 출력 → 2번(N-i번) 반복<br>
- k가 1일 경우 : * 1번 출력 → 3번(i번) 반복 <br>
▶ i가 4일때<br>
- j가 1일 경우 : 공백 1번 출력 → 1번(N-i번) 반복<br>
- k가 1일 경우 : * 1번 출력 → 4번(i번) 반복 <br>
▶ i가 5일때<br>
- j가 1일 경우 : 공백 출력X<br>
- k가 1일 경우 : * 1번 출력 → 5번(i번) 반복 <br>

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
 
public class Main {
    public static void main(String[] args) throws NumberFormatException, IOException {
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        
        int N = Integer.parseInt(br.readLine()); // 최대 별의 개수
        String star = "*";
        
        int i;
        int j;
        int k;
        
        for(i = 1; i <= N; i++) { // 1부터 N열까지 출력
            // 공백 출력 : 전체 행의 개수에서 별의 개수를 빼고 출력
            for(j = 1; j <= N-i; j++) { 
                bw.write(" ");
            }
            // 별의 개수 : i의 값만큼 출력
            for (k = 1; k <= i; k++) {
                bw.write(star);
            }
            
            bw.write("\n"); // 줄바꿈을 위해 삽입
        }
        
        br.close();
        bw.flush();
        bw.close();
        
    }
}

```
