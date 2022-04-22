> **자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.<br>- 출력<br>첫째 줄부터 N번째 줄 까지 차례대로 출력한다.** <br>

https://www.acmicpc.net/problem/2742

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpBVmW%2Fbtrz2qrejxY%2FUSqSs6RS0tkmOgJyBm2ke1%2Fimg.png "Q")

![A](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbyxPrf%2Fbtrz44OiWgf%2FUgC18CG8GmjikN2SyfHGt1%2Fimg.png "A")

```java
import java.util.Scanner;
 
public class Main {
    public static void main(String[] args) { /* 접근제어자 public. 반환값이 없도록 main 함수를 선언한다. */
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int j = N;
        
        for(int i = 1; i <= N; i++) {
            System.out.println(j);
            j = j - 1;
        }
    }
}

```
