> **연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.<br>윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.<br>예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.<br>- 입력<br>첫째 줄에 연도가 주어진다. 연도는 1보다 크거나 같고, 4000보다 작거나 같은 자연수이다.<br>- 출력<br>첫째 줄에 윤년이면 1, 아니면 0을 출력한다.** <br>

https://www.acmicpc.net/problem/2753 

![no.2753](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fxxd0n%2FbtryvvU4zx7%2Fk7Hg3ZB8hjTZtTeoqWOr51%2Fimg.png "no.2753")

![retest](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc0xR4A%2Fbtryz0nna7f%2FGaZfCeA54wiH34ku1xEqxk%2Fimg.png "retest")

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int year = sc.nextInt();
        
        if(year % 4 == 0 && year % 100 != 0) {
            System.out.println("1");
        } else if(year % 400 == 0) {
            System.out.println("1");
        } else {
            System.out.println("0");
        }
    }
}
 
```
