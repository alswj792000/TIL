> **아래 예제와 같이 고양이를 출력하시오.** <br>
https://www.acmicpc.net/problem/10171

![no.2557](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FckoLkO%2FbtrxhOhidpO%2FfQkQH7Fl6GST3Wdbx85Ldk%2Fimg.png "no.10171")

→ <span style="color : red"> [ERROR] 출력형식이 잘못되었습니다</span><br>

: 출력 결과는 정답과 유사하나, 공백, 빈 줄과 같은 문제로 인해서 출력 결과가 일치하지 않은 경우<br><br>

- \: 역슬래시 기호를 단일로 사용할 경우 'escape'의 성격을 띠며 원래의 의미를 벗어나 새로운 기능을 하게 됨. [ escape : https://doongi9.tistory.com/entry/Escape​ ]<br>
- \n : 줄바꿈 기호.<br>
- \r : 다음 줄 맨 처음으로 가는 역할<br>
- \" : 큰 따옴표를 그냥 쓰게 되면 다른 의미로 받아들여 큰 따옴표를 직접 쓸 때 역슬래시를 써줌.<br>
- \' : 작은 따옴표 또한 큰 따옴표와 같다.<br>
- \\ : 역슬래쉬 하나를 출력한다.<br>
<br>
다시 말해, 문자열을 출력하는 데 쓰이는 따옴표나 줄바꿈 기호로 쓰일 수 있는 역슬래시는 앞에 역슬래시를 하나 더 붙여줘야 한다<br>
<br>

→ [ERROR] 컴파일 에러 발생<br>

언어 도움말 페이지에 가면 java는 다음과 같이 컴파일/실행 한다고 되어 있습니다.<br>

- 컴파일: javac -J-Xms1024m -J-Xmx1024m -J-Xss512m -encoding UTF-8 Main.java<br>
- 실행: java -Xms1024m -Xmx1024m -Xss512m -Dfile.encoding=UTF-8 Main<br>

**따라서, class 이름은 반드시 Main 으로 해야 합니다.**<br>

![retest](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1zi20%2Fbtrxgv9Y8ZK%2FrajcLZBupkB7Q7AXo7Imj0%2Fimg.png "retest")

```java
public class Main {
    
    public static void main(String[] args) {
        System.out.println("\\    /\\\n )  ( ')\n(  /  )\n \\(__)|");
    }
 
}

```
