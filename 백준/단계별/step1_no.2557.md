> **Hello World!를 출력하시오.** <br>
https://www.acmicpc.net/problem/2557

![no.2557](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbBR132%2FbtrxkfqElIG%2FKYO4k85d6AIyKclk5Diyr0%2Fimg.png "no.2557")

    public class no2557 {
        // Hello World!를 화면에 출력하는 문제 (예제 출력과 똑같이 출력해야 합니다.)
        
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
    }


→ 컴파일 에러 발생<br>

언어 도움말 페이지에 가면 java는 다음과 같이 컴파일/실행 한다고 되어 있습니다.<br>

- 컴파일: javac -J-Xms1024m -J-Xmx1024m -J-Xss512m -encoding UTF-8 Main.java<br>
- 실행: java -Xms1024m -Xmx1024m -Xss512m -Dfile.encoding=UTF-8 Main<br>

**따라서, class 이름은 반드시 Main 으로 해야 합니다.**<br>

![retest](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZBOCm%2Fbtrxj6AOYqk%2F9OY9Pztav1I40U1AeB1qx0%2Fimg.png "retest")

```java
public class Main {
    
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
 
}

```
