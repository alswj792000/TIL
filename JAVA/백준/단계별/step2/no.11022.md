> **두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 테스트 케이스의 개수 T가 주어진다.각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)<br>- 출력<br>각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다.<br>x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.** <br>

https://www.acmicpc.net/problem/11022

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbW3Hyy%2FbtrAcRO35nc%2Fv9e5nqm9Tl56WoD3ccbi4k%2Fimg.png "Q")

![A](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbaLwaY%2FbtrAdvLx8ME%2FjESek2LoblisKDa2nd3rBK%2Fimg.png "A")

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
 
public class Main {
    public static void main(String[] args) throws NumberFormatException, IOException { /* 접근제어자 public. 반환값이 없도록 main 함수를 선언한다. */
        
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        
        int T = Integer.parseInt(br.readLine()); // 테스트케이스 개수
        int A, B;
        
        for(int x = 1; x <= T; x++) {
            String[] list = br.readLine().split(" ");
            A = Integer.parseInt(list[0]);
            B = Integer.parseInt(list[1]);
            
            bw.write("Case #"+ x + ": " + Integer.toString(A+B) + "\n");
            
        }
        
        br.close();
        bw.flush();
        bw.close();
        
    }
}


```
