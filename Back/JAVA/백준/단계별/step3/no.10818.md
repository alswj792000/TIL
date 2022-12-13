> **N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다.<br>둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다.<br>모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.<br>- 출력<br>첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.** <br>

https://www.acmicpc.net/problem/10818

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbMXP9L%2FbtrA43henv9%2FRSo0ji2zIvAjyrfGMZURE1%2Fimg.png "Q")

------------


- 방법 1 : Scanner + 배열
Scanner을 이용해 정수의 개수와 정수를 입력받고 입력받은 정수의 최솟값과 최댓값을 출력했다.
![A](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1xk2T%2FbtrBaQ1twjV%2FCJDPVOkWalWdtWzwuTB1Z1%2Fimg.png "A")
배열을 먼저 선언한 후 반복문을 이용해서 배열에 정수를 입력받도록 작성했다. <br>
입력한 N개의 정수는 공백으로 구분하여 입력해도 입력이 가능했다.<br>
Arrays.parallelSort()를 이용해 배열에 저장된 원소값을 오름차순으로 정렬하였다.<br>
최솟값, 최댓값을 출력할때 배열은 0부터 시작하므로 최솟값은 arr[0], 최대값은 arr[N-1]으로 작성했다. <br>

```java
import java.util.Arrays;
import java.util.Scanner;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int N = sc.nextInt(); // 주어진 정수의 개수
        int[] arr = new int[N];
        
        for(int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
        }
        Arrays.parallelSort(arr); // 배열에 저장된 원소값을 오름차순으로 정렬
        System.out.println(arr[0] + " " + arr[N-1]); // 최소값 : 0번째 | 최대값 N-1번째 (배열은 0부터 시작)
    }
}


```

------------


- 방법 2 : BufferedReader + 배열
![A2](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbT3kVF%2FbtrBaj4Rf2X%2F3071PG7XTVKBs4SkyAev50%2Fimg.png "A2")

String타입인 readLine()을 통해서 정수들과 공백을 입력받았기때문에 StringTokenizer을 이용해 공백을 기준으로 문자열을 분리해준다. <br>
StringTokenizer의 매개변수인 st에 hasMoreTokens()메서드를 이용해 다음 토큰(분리된 문자열) 값이 있다면 true을 반환하고 그렇지 않을경우 false를 반환해 반복문while이 종료되도록 했다.<br>
Arrays.sort()를 이용해 배열을 오름차순으로 정렬하였고 System.out.println을 이용해 콘솔에 값을 출력하였다. <br>

    * bw.write()를 사용해서 콘솔에 출력하고자했을때 출력이 되지 않았는데, 
    이 링크(https://www.acmicpc.net/board/view/29632)를 보고 그 이유를 알수있었다.
    
    BufferedWriter는 화면에 바로 출력하는 것이 아니라 버퍼에 임시저장을 하기 때문에 바로 보이지 않고, 버퍼가 어느 이상 찼을 때 한 번에 화면으로 모아서 보내지기때문에 속도가 빠르다.
    결과를 바로바로 보고 싶다면 bw.flush(); 를 해줘야 한다.
    단, 바로 이 flush가 느리기때문에 매번 flush를 할 거라면 BufferedWriter를 쓰는 의미가 없다.

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.StringTokenizer;
 
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st;
        
        int N = Integer.parseInt(br.readLine()); // 정수의 개수
        st = new StringTokenizer(br.readLine(), " "); 
        br.close();
        
        int[] Nlist = new int[N]; // 정수의 배열
        int i = 0;
        
        while(st.hasMoreTokens()) {
            Nlist[i] = Integer.parseInt(st.nextToken()); 
            i++;
        }
        
        Arrays.sort(Nlist); // 배열을 오름차순으로 정렬
//        bw.write(Nlist[0] + " " + Nlist[N-1]); // 출력안됨? -> bw.flush를 해주지 않은 상태에서 바로 볼수 없음
        System.out.println(Nlist[0] + " " + Nlist[N-1]);
        
//        bw.flush();
        bw.close();
    }
}

```

------------

Scanner를 사용한 경우와 BufferedReader을 사용한 경우를 비교해봤을때, BufferedReader을 사용한 경우가 메모리적으로도, 시간적으로도 빠르고 효율적이었다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbBcoVX%2FbtrBaxu4hhv%2FuOOSC3C7eeQ0NVRFYLDNK1%2Fimg.png)

10818번 문제를 풀면서 Arrays.sort()와 Arrays.parallelSort()의 차이점에 대해서도 알수 있었다.<br>
https://doongi9.tistory.com/entry/JAVA-%EB%B0%B0%EC%97%B4%EC%9D%98-%EC%A0%95%EB%A0%AC-Arrayssort-VS-ArraysparallelSort

BufferedReader로 작성했을때는 오류가 발생하는 부분이 있어 다른 분의 블로그를 참고하여 작성했는데 배열을 사용하지 않고도 문제를 풀수 있었다.
