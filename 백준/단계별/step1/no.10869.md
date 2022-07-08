> **두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. <br>- 입력<br>두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000<br>- 출력<br>첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.** <br>

https://www.acmicpc.net/problem/10869

![no.10869](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoUCy5%2FbtrxHXJSRjj%2F3jIVSiuykvikzSA4bp8A7K%2Fimg.png "no.10869")

![retest](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbryjkI%2FbtrxGcHzHhQ%2FcPMtGPOXqOA3H0IRE0bkQ1%2Fimg.png "retest")

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int A = sc.nextInt();
        int B = sc.nextInt();    
        
        System.out.println(A+B);
        System.out.println(A-B);
        System.out.println(A*B);
        System.out.println(A/B);
        System.out.println(A%B);
        
    }
}
```
