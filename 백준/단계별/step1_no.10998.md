> **두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)<br>- 출력<br>첫째 줄에 A×B를 출력한다.** <br>


https://www.acmicpc.net/problem/10998

![no.10998](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fo6fOo%2Fbtrxr4o6uKj%2FkopdI0AX0T4KkqiqPLkkg0%2Fimg.png "no.10998")

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbw354S%2FbtrxkKLJnHC%2F0EOAT8eCvUKmazGMGmeGc1%2Fimg.png)

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int A = sc.nextInt();
        int B = sc.nextInt();
        
        System.out.println(A*B);
        
    }
}


```
