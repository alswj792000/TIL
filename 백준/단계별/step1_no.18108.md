> **ICPC Bangkok Regional에 참가하기 위해 수완나품 국제공항에 막 도착한 팀 레드시프트 일행은 눈을 믿을 수 없었다. 공항의 대형 스크린에 올해가 2562년이라고 적혀 있던 것이었다.
불교 국가인 태국은 불멸기원(佛滅紀元), 즉 석가모니가 열반한 해를 기준으로 연도를 세는 불기를 사용한다. 반면, 우리나라는 서기 연도를 사용하고 있다. 불기 연도가 주어질 때 이를 서기 연도로 바꿔 주는 프로그램을 작성하시오.<br>- 입력<br>서기 연도를 알아보고 싶은 불기 연도 y가 주어진다. (1000 ≤ y ≤ 3000)<br>- 출력<br>불기 연도를 서기 연도로 변환한 결과를 출력한다.** <br>

https://www.acmicpc.net/problem/18108

![no.18108](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkZPTp%2Fbtrx5zuVzPx%2F4W1bi9bKceQWTgTXto6dQ0%2Fimg.png "no.18108")


![retest](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkAMWg%2Fbtrx5tuJx10%2FLUK6vwK6ExfxKS8jju6i5k%2Fimg.png "retest")

```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int y = sc.nextInt();
        int s = y - 543;
//        System.out.println("불기연도 : " + y);
        System.out.println(s); // 서기연도
    }
}


```
