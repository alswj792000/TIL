> **(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?<br>(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?<br>세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)<br>- 출력<br>첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.** <br>

https://www.acmicpc.net/problem/10430

![no.10430](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F49d5G%2Fbtryc7l8Vd7%2FHDoTuAQxEpvasuKnOL3i81%2Fimg.png "no.10430")

![retest](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FctyKVr%2Fbtrydz3MjSD%2Frqx8surwFDD4cHjdPCSHrK%2Fimg.png "retest")

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int A = sc.nextInt();
        int B = sc.nextInt();
        int C = sc.nextInt();
        
        System.out.println((A+B)%C);
        System.out.println(((A%C) + (B%C))%C);
        System.out.println((A*B)%C);
        System.out.println(((A%C) * (B%C))%C);
    
    }
}

```
