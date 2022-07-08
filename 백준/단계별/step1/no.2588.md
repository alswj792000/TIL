> **(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcTIyuP%2Fbtryg3bW8Ez%2FNTH5IE1QBPUb65nUCf5wh1%2Fimg.png)<br>(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.<br>- 출력<br>첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.** <br>

https://www.acmicpc.net/problem/2588

![no.2588](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FL5PPM%2FbtryiF2H5Cu%2Fn7ubMCjlrKscnnfJllPSyk%2Fimg.png "no.2588")

![retest](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcDSNxW%2FbtryetWlf8S%2FBV94v7HQOL1VGN9a0UZjC1%2Fimg.png "retest")

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        String A = sc.nextLine();
        String B = sc.nextLine();
        
        int b1 = B.charAt(0)-'0'; 
        int b2 = B.charAt(1)-'0';
        int b3 = B.charAt(2)-'0';
        
        int a = Integer.parseInt(A);
        int b = Integer.parseInt(B);
        
        System.out.println(a*b3);
        System.out.println(a*b2);
        System.out.println(a*b1);
        System.out.println(a*b);
        
    }
}


```
