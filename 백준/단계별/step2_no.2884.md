> **상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.<br>상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.<br>이런 상근이를 불쌍하게 보던, 창영이는 자신이 사용하는 방법을 추천해 주었다.<br>바로 "45분 일찍 알람 설정하기"이다.<br>이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.<br>현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미한다.입력 시간은 24시간 표현을 사용한다.<br>24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 시간을 나타낼 때, 불필요한 0은 사용하지 않는다.<br>- 출력<br>첫째 줄에 상근이가 창영이의 방법을 사용할 때, 설정해야 하는 알람 시간을 출력한다. (입력과 같은 형태로 출력하면 된다.)** <br>

https://www.acmicpc.net/problem/2884

![no.2884](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcf2QZ7%2FbtryEXCfHqe%2FeXG3L7f0w44BL7kNnkqFP0%2Fimg.png "no.2884")

![retest](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbO1Fw1%2FbtryFnCOPzl%2FQPI5h5YTtoRF3t0yUoPGR1%2Fimg.png "retest")

→ 틀렸습니다.

- 입력받은 분이 45분 이상일 경우 : 시는 유지 + 60 + (분 - 45)

- 입력받은 분이 45분 미만일 경우 :

1. 시간이 0 일경우 : 23시 + 60 + (분 - 45)

2. 시간이 0 이 아닐 경우 : 시 -1 + 60 + (분 - 45)

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fm8qfQ%2FbtryIqrRGR7%2FiQuWMdOXsNtODEhPnQto1K%2Fimg.png)

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // 입력받은 분이 45분 이상일 경우  M-45 / 45분 미만일 경우 H-1
        // 24시간 형태이기때문에 시간이 0보다 작을 경우 23시간으로 바꿔준다
        
        int H = sc.nextInt(); // 60M
        int M = sc.nextInt();
        
        int h = 0;
        int m = 0;
        
        if(M >= 45) {
            h = H;
            m = M - 45;
            System.out.print(h + " " + m);
        } else { // 분이 45분보다 작을 경우 
            if(H > 0) { // & 시간이 0보다 클 경우
                h = H -1;
                m = 60 + (M - 45);
                System.out.println(h + " " + m);
            } else { // 시간이 0보다 작을 경우
                h = 23;
                m = 60 + (M - 45);
                System.out.println(h + " " + m);
            }
        }
    
    }
}


```
