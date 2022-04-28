> **두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.<br>- 입력<br>입력은 여러 개의 테스트 케이스로 이루어져 있다.<br>각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)<br>- 출력<br>각 테스트 케이스마다 A+B를 출력한다.** <br>

https://www.acmicpc.net/problem/10951

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuIevt%2FbtrAGfWMKzl%2F2zlyNwh5nzHaz38uQa2vt1%2Fimg.png "Q")

0952와는다르게 입력이 끝나는 조건이 따로 나와있지 않아서 아무것도 입력되지 않았을때를 입력이 끝나는 조건으로 설정하였다.<br>

![A1](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcAOIQB%2FbtrAGe4EWzv%2FMolLIZUQ6k2LdVt5dquEvK%2Fimg.png "A1")

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdfqb1M%2FbtrAHjEE09y%2FAbUzED5WooaPNwHhumgz31%2Fimg.png)

첫번째 코드는 틀렸고 두번째 코드에서는 출력 초과가 발생했다.<br>

아무것도 입력하지 않았을때를 종료 조건으로 하기위해 입력받은 string값이 null이 아닐때 while문이 돌아가도록 코딩했는데, 이클립스에서 실행해봤을때는 이렇게 한 항목이 계속해서 반복되었기때문에 당연히 출력초과가 되었을것이다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcEtj0k%2FbtrAKTK0nty%2FTzup2QEmIdyZozGSyGHt30%2Fimg.png)

이 문제를 풀기위해서는 EOF에 대해 알아야 했는데 자세한 내용은 이 블로그를 참고했다. <br>
https://steady-coding.tistory.com/227

BufferdReader의 경우 Scanner와 다르게 EOF를 처리하는 내장함수가 없기때문에 br.readLine()으로 입력값을 계속 읽되, 읽은 값이 null이 되면 반복문을 종료하는 방식으로 처리했다.

![A2](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbR7qOT%2FbtrAFVKoVgn%2FswGfY94QXEsk6KfPTcqrR0%2Fimg.png "A2")

→ **NumberFormatException** 발생<br>
: 문자열을 변화할때 숫자열이 아니라서 발생한다.<br>
여기서는  A와 B를 입력하고 null이 입력될수 있도록 엔터를 두번 눌렀을때 마지막 엔터("")를 integer로 변환하려고해서 발생했다.
<br>
그래서 StringTokenizer와 if문을 이용해 StringTokenizer이 토큰이 더 있을 경우 A와 B를 더하고 그렇지 않을 경우 반복문이 종료되도록 했다.

* StringTokenizer : 

![A3](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fut6xk%2FbtrAJBdOWIc%2FoYgylfFwqoTVfOFVLu7HgK%2Fimg.png "A3")

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;
 
public class Main {
    public static void main(String[] args) throws IOException {
        // 조건 : 입력의 종료는 아무것도 입력하지 않았을때
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;
        
        int A, B;
        String input; 
        
        // 반복의 횟수가 정해지지 않았음 = while 사용
        while((input = br.readLine()) != null ) { // EOF
            st = new StringTokenizer(input, " ");
            
            if(st.hasMoreTokens()) {
                A = Integer.parseInt(st.nextToken());
                B = Integer.parseInt(st.nextToken());
                
                bw.write(A+B+"\n");
            } else {
                break;
            }
                 
        }
        br.close();
        
        bw.flush();
        bw.close();
    }
}

```

[ 참고 블로그 ] <br>
https://crazykim2.tistory.com/419 <br>
https://infodon.tistory.com/24 <br>
