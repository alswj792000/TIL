> **두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 테스트 케이스의 개수 T가 주어진다.각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)<br>- 출력<br>각 테스트 케이스마다 A+B를 출력한다.** <br>

https://www.acmicpc.net/problem/10950

![no.10950](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdAYhdR%2FbtrznAAPMG5%2FPXScuPomgDLDZGDoHkrqn1%2Fimg.png "no.10950")

1. 맨 첫째 줄에 입력하는 T는 테스트 케이스의 개수
2. 테스트케이스를 진행시, 입력받은 A와 B를 이용해 A+B를 테스트 케이스의 수 만큼 출력한다.

![test](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbnWRZe%2FbtrzI2hRSxS%2F4E4JeQ83Q7x0MFbJArUuHk%2Fimg.png "test")

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) { /* 접근제어자 public. 반환값이 없도록 main 함수를 선언한다. */
        
        Scanner sc = new Scanner(System.in); /* 값을 입력 받기 위해 Scanner 객체 sc를 선언한다. */
        
        int T = sc.nextInt(); // testcase의 개수
        
        for(int i = 1; i <= T; i++) {
            int A = sc.nextInt();
            int B = sc.nextInt();
            
            System.out.println(A+B);
        }
        sc.close(); /* Scanner 함수의 사용이 종료되었으므로 객체 sc를 종료해서 메모리에서 반환되게 한다. */
    }
}


```
