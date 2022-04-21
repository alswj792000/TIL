> **자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.<br>- 출력<br>첫째 줄부터 N번째 줄 까지 차례대로 출력한다.** <br>

https://www.acmicpc.net/problem/2741

![no.2741](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FG8148%2Fbtrz5nNxKj1%2FgGc6mMY1jcYAIPk0rqQpEK%2Fimg.png "no.2741")

처음에는 이렇게 작성했었는데 원하는대로 1씩 더해지지 않고 2씩 더해져서 출력되었다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbX3wbc%2Fbtrz7iR73S6%2F8gg7XqObiJBnU9324HY0WK%2Fimg.png)

 그래서 1씩 출력될수 있도록 새로운 변수 j를 선언해 for문이 반복될때마다 j에 1이 더해질수 있도록 작성하였다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbBtKPj%2Fbtrz6ru61eG%2FLUnpkCAKhLcTBuO3KGaId0%2Fimg.png)


![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdA3Eln%2Fbtrz4Pjl6iK%2FWJpXqJ35kCeYsXnSiXJo71%2Fimg.png)

```java
import java.util.Scanner;
 
public class Main {
    public static void main(String[] args) { /* 접근제어자 public. 반환값이 없도록 main 함수를 선언한다. */
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt();
        int j = 1;
        
        for(int i = 1; i <= N; i++) {
            System.out.println(j);
            j = j + 1;
        }
    }
}


```
