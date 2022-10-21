> **준하는 사이트에 회원가입을 하다가 joonas라는 아이디가 이미 존재하는 것을 보고 놀랐다. 준하는 놀람을 ??!로 표현한다. 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어졌을 때, 놀람을 표현하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어진다. 아이디는 알파벳 소문자로만 이루어져 있으며, 길이는 50자를 넘지 않는다.<br>- 출력<br>첫째 줄에 준하의 놀람을 출력한다. 놀람은 아이디 뒤에 ??!를 붙여서 나타낸다.** <br>

https://www.acmicpc.net/problem/10926

![no.1000](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcg3z2j%2Fbtrx08etm5d%2FgoBwYAHTW1vN4fYyKrKR4K%2Fimg.png "no.10926")


![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOz7vO%2FbtrxZCtR0sI%2FmJMyEF26nPJ3wc8c5DHwzk%2Fimg.png)
<span style="color:red">→ 틀렸습니다.<br>
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FPBRYq%2Fbtrx30T4D2C%2F1Brv5MTX6hIVwL4ZkgStN1%2Fimg.png)

기존에 존재하는 아이디가 joonas가 아니라 <b>입력한 입력한 문자열을 이미 존재하는 아이디로 가정하고 입력</b>한다.
</span>



![retest](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJM0AE%2Fbtrx2RpyMji%2FVPL2Omv6DJB9tg5KMx3NaK%2Fimg.png "retest")

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println(sc.next() + "??!");
    }
}

```
