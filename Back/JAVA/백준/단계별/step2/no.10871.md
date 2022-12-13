> **정수 N개로 이루어진 수열 A와 정수 X가 주어진다.<br>이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)둘째 줄에 수열 A를 이루는 정수 N개가 주어진다.<br>주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.<br>- 출력<br>X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.** <br>

https://www.acmicpc.net/problem/10871

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbuFUix%2FbtrApk4zILT%2FdA7jEsx1mgLpYYkKDAnA60%2Fimg.png "Q")

![A](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOlTIq%2FbtrApk4ISG0%2F2gR0b7n7Sr4mNcbVBVEwgk%2Fimg.png "A")

![record](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBrnij%2FbtrAs8PiEGn%2FMH9ilZABVO1YJBgLkuu2t0%2Fimg.png "record")

정수의 개수만 입력받고 N개의 정수들이 랜덤값으로 들어간다는 생각으로 구현했는데 다시 예제 입력 부분을 보니 N개의 정수들도 입력받아야 했다.

![A2](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbptChT%2FbtrABZzbywJ%2FlR0kHnNbtJEtUyE1rzWW2K%2Fimg.png "A2")

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
 
public class Main {
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        
        int I = 1;
        int N, X;
        
        for(int i = 0; i < I; i++) {
            // 주어진 정수의 개수와 기준값
            String[] inputList = br.readLine().split(" ");
            N = Integer.parseInt(inputList[0]);
            X = Integer.parseInt(inputList[1]);
            
            // 입력받은 N개의 값 배열에 저장
            String[] list = br.readLine().split(" ");
            int[] array = new int[N]; // N개의 정수
            for(int j = 0; j < N; j++) {
                array[j] = Integer.parseInt(list[j]);
                
                if(array[j] < X) { // 입력받은 값이 X보다 작은값 출력
                    bw.write(Integer.toString(array[j]) + " ");
                }
            }
        }
        br.close();
        bw.flush();
        bw.close();
    }
}
```
