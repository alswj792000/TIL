> **n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.<br>- 출력<br>1부터 n까지 합을 출력한다.** <br>

https://www.acmicpc.net/problem/8393

![no.8393](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmuVAR%2FbtrzCKQPeTV%2FDgNIst3qr675Kn3TLbRxRK%2Fimg.png "no.8393")

![test](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb5sRV8%2FbtrzGg2OKiQ%2FNccpIPHtK2UHhAh1Cn1EA0%2Fimg.png "test")

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) { /* 접근제어자 public. 반환값이 없도록 main 함수를 선언한다. */
        
        Scanner sc = new Scanner(System.in); /* 값을 입력 받기 위해 Scanner 객체 sc를 선언한다. */
        
        int n = sc.nextInt(); 
        int result = 0;
        
        for(int i = 1; i <= n; i++) { // i가 n보다 작거나 같을때까지 for문을 돌림
            result += i; // => result = i + result
        }
        
        System.out.println(result);
        sc.close(); /* Scanner 함수의 사용이 종료되었으므로 객체 sc를 종료해서 메모리에서 반환되게 한다. */
    }
}

```
