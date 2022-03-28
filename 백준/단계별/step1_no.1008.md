> **두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오. <br>- 입력
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10) <br>- 출력
첫째 줄에 A/B를 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다.** <br>
https://www.acmicpc.net/problem/1008

![no.1008](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8aoq9%2FbtrxmA4pen5%2FIv6SxNKnkfe1N0sLnIlj2k%2Fimg.png "no.1008")

![retest](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbz1QWV%2FbtrxHwFKK2S%2FwD4jAfrCNImAzE0Su8w1Gk%2Fimg.png "retest")

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        double A = sc.nextDouble();
        double B = sc.nextDouble();    
        
        System.out.println(A/B);
        
    }
}

```
