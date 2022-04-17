> **N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오.<br>출력 형식에 맞춰서 출력하면 된다.<br>- 입력<br>첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.<br>- 출력<br>출력형식과 같게 N*1부터 N*9까지 출력한다.** <br>

https://www.acmicpc.net/problem/2739

![no.2739](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fy969O%2FbtrzpXbhXEm%2FHneF85S5nq1mpuQAz7weaK%2Fimg.png "no.2739")

![cd](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcchDyV%2FbtrzsOYK3bj%2F9R2KftJjpPAQQzwx9XrWH0%2Fimg.png "cd")

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        
        for(int i = 1; i < 10; i++) {
            int M = N*i;
            System.out.println(N + " * " + i + " = " + M);
        }
    }
}

```
