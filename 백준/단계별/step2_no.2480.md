> **1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. <br>1. 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. <br>2. 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. <br>3. 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.<br>예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.<br>3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.** <br>

https://www.acmicpc.net/problem/2480
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtQaAB%2Fbtrze0rp48B%2FVUrwF72t9PhqVTHS9zy3qK%2Fimg.png)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbj3Xt2%2FbtrzrL2g9iY%2Fhk5c2qZolvPOYvTPmGfzA0%2Fimg.png)

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        
        int m = a; // 최대값 or 같은 눈
        
        if(a == b && b == c) { // 모두 같을때
            System.out.println(10000 + (m * 1000));
        } else if(a != b && b != c && a != c){ // 모두 다를때
            // 가장 큰 눈
            if(m < b) {
                m = b;
            } 
            if(m < c) {
                m = c;
            }
            System.out.println(m * 100);
        } else { // 같은 눈이 두개일때
            if(a == b) {
                m = a;
            } else if(b == c) {
                m = b;
            } else if(a == c) {
                m = a;
            }
            System.out.println(1000 + ( m * 100));
        }
        
    }
}

```
