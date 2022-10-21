> **두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. <br>
- 입력<br>
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)<br>
- 출력<br>
첫째 줄에 A+B를 출력한다.** <br>
https://www.acmicpc.net/problem/1000

![no.1000](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzHDq6%2FbtrxlpAUNx8%2FxNb6gbgfzBkM8uVGkXj8O0%2Fimg.png "no.1000")

<span style="color:red">→ 컴파일 에러 발생 : import를 같이 적어주지 않아서 발생한 오류<br></span>

![retest](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fba4U8W%2FbtrxgwHSWU3%2FWFMAnuelQKEgNSv0KYRKL0%2Fimg.png "retest")

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int A = sc.nextInt();
        int B = sc.nextInt();
        
        System.out.println(A+B);
        
    }
 
}

```
