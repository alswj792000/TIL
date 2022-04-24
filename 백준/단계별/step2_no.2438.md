> **첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제<br>- 입력<br>첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.<br>- 출력<br>첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.** <br>

https://www.acmicpc.net/problem/2438

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbsheKF%2FbtrAgg0X81e%2FotTCr9R9i5JSjl91OlGVb0%2Fimg.png "Q")

![A](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWa4K7%2FbtrAgoM7ucl%2FtRilQdJwX77lPd6mrqTUOK%2Fimg.png "A")

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
 
public class Main {
    public static void main(String[] args) throws NumberFormatException, IOException { /* 접근제어자 public. 반환값이 없도록 main 함수를 선언한다. */
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        
        int N = Integer.parseInt(br.readLine()); // 최대 별의 개수
        String star = "*";
        
        for(int i = 1; i <= N; i++) { // 1부터 N행까지 출력
            
            for(int j = 1; j <= i; j++) { // i의 수만큼 *찍기
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

※ BufferedReader와 BufferedWriter을 사용했을 경우 Scanner에 비해 속도적인 부분에서 향상되지만 개행(줄바꿈)을 할 경우 write("\n") 이나 newLine() 함수를 사용해야 한다.
