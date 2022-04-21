> **본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.
Java를 사용하고 있다면, Scanner와 System.out.println 대신 BufferedReader와 BufferedWriter를 사용할 수 있다. BufferedWriter.flush는 맨 마지막에 한 번만 하면 된다.
또한 입력과 출력 스트림은 별개이므로, 테스트케이스를 전부 입력받아서 저장한 뒤 전부 출력할 필요는 없다. 테스트케이스를 하나 받은 뒤 하나 출력해도 된다.
자세한 설명 및 다른 언어의 경우는 이 글에 설명되어 있다.
이 블로그 글에서 BOJ의 기타 여러 가지 팁을 볼 수 있다.<br><br>- 입력<br>첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.<br>- 출력<br>각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.<br>- 시간 제한<br>Java 8: 1.5 초Java 8 (OpenJDK): 1.5 초** <br>

https://www.acmicpc.net/problem/15552

![no.15552](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6sCJX%2FbtrzKQB6FEJ%2FoUViBKH53yMmAkYXN2Bds1%2Fimg.png "no.15552")

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcBgXed%2Fbtrz3501lGN%2FpJfjDOKMDkQcQV6LtzKzK1%2Fimg.png)

→ 런타임 에러 (NumberFormatException) 발생 : 숫자 형식 오류
이클립스에서는 오류가 발생하지 않았는데 백준에서는 에러가 발생해서 당황했다.
추측한 바로는 A와 B를 입력받을때 Integer.parseInt(br.readLine())으로 엔터로 구분되게 입력받았는데 아마 이 부부에서 문제가 발생한것 같았다.
그래서 A B의 배열로 입력받은 다음 split(" ")을 이용해 공백을 기준으로 문자열을 잘라 사용하도록 구현하였다.
이 블로그를 참고했다.
https://m.blog.naver.com/zzang9ha/221728173726

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbBtKPj%2Fbtrz6ru61eG%2FLUnpkCAKhLcTBuO3KGaId0%2Fimg.png)

→ 런타임 에러 (IO) 발생
이렇게 작성한 이후로는 IOException이 발생했다.
엔터를 누를때마다 더한 값이 바로 출력되는 형식으로 구상했기때문에 for문 안에 bw.flush를 넣어서 작성했는데 이 부분에서 문제가 발생했다.
그래서 for문 밖으로 bw.flush와 bw.close를 이동시켰고 성공했다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbqt0Mx%2Fbtrz49u4rSx%2FdMGlZwykxVUUc98pyEhkyk%2Fimg.png)

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
 
public class Main {
    public static void main(String[] args) { /* 접근제어자 public. 반환값이 없도록 main 함수를 선언한다. */
        // 콘솔에서 입력받을 경우
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 입력
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); // 출력
        
        try { // BufferedReader사용시 ㄴ예외처리 필수! (or throwsIOException)
            
            int T = Integer.parseInt(br.readLine()); // 테스트케이스의 개수 : BufferedReader는 String이 return값이기때문에 형변환 필수
            int A, B; // 두 정수
            
            for(int i = 0; i < T; i++) {
                // 문자열을 입력받고 공백기준으로 잘라서 A와 B의 값 넣기
                String[] list = br.readLine().split(" "); 
                // 자른 문자열을 다시 int로 변환
                A = Integer.parseInt(list[0]);
                B = Integer.parseInt(list[1]);
                
                bw.write(Integer.toString(A+B)+"\n"); // bufferedWriter이 string타입으로 반환되기때문에 toString을 이용해 형변환
            }
            
            bw.flush(); // 남아있는 데이터를 모두 출력시킴
            bw.close(); // 스트림 닫기 : 여기서 닫아주지 않으면 시간 초과 발생
            br.close(); // 입출력이 끝난 후 닫아주기
            
        } catch (NumberFormatException | IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        
    }
}

```
