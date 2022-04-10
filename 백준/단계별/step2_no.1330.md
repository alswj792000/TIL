> **두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.<br>-입력<br>첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.<br>- 출력<br>첫째 줄에 다음 세 가지 중 하나를 출력한다.<br>A가 B보다 큰 경우에는 '>'를 출력한다.<br>A가 B보다 작은 경우에는 '<'를 출력한다.<br>A와 B가 같은 경우에는 '=='를 출력한다.** <br>

https://www.acmicpc.net/problem/1330 

![no.1330](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FH6oQX%2FbtrygZvwn7F%2Flpv9y7EjX0eyoKpHBJz0T0%2Fimg.png "no.1330")

![retest](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6QFwK%2FbtrytjFiX56%2FC4MAz90fMvGYvRPB2MGXsK%2Fimg.png "retest")

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int A = sc.nextInt();
        int B = sc.nextInt();
        
        if(A > B) {
            System.out.println(">");
        } else if(A < B) {
            System.out.println("<");
        } else {
            System.out.println("==");
        }
        
    }
}


```
