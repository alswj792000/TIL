> **시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.<br>- 출력<br>시험 성적을 출력한다.** <br>

https://www.acmicpc.net/problem/9498 

![no.9498](https://blog.kakaocdn.net/dn/cHlllV/btryso7Sp3Z/GZRbVXt4gRDdwKZ4ofka40/img.png "no.9498")

![retest](https://blog.kakaocdn.net/dn/VN8IZ/btrytgV3fNv/pOekDFrIkklsft1kjgJdy1/img.png "retest")

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int s = sc.nextInt();
        
        if(90 <= s && s <= 100) {
            System.out.println("A");
        }else if(80 <= s && s <= 89) {
            System.out.println("B");
        } else if(70 <= s && s <= 79) {
            System.out.println("C");
        } else if(60 <= s && s <= 69) {
            System.out.println("D");
        } else {
            System.out.println("F");
        }
    }
}


```
