> **0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다.
먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다.
그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다. 다음 예를 보자.<br>26부터 시작한다.<br>2+6 = 8이다.<br>새로운 수는 68이다. 6+8 = 14이다.<br>새로운 수는 84이다. 8+4 = 12이다.<br>새로운 수는 42이다. 4+2 = 6이다.<br>새로운 수는 26이다.<br>위의 예는 4번만에 원래 수로 돌아올 수 있다.<br>따라서 26의 사이클의 길이는 4이다.<br>N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 N이 주어진다. N은 0보다 크거나 같고, 99보다 작거나 같은 정수이다.<br>- 출력<br>첫째 줄에 N의 사이클 길이를 출력한다.** <br>

https://www.acmicpc.net/problem/1110

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWfszo%2FbtrAG5GfIxq%2FbMDllK6UK9atVjcbhgOZH1%2Fimg.png "Q")

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FLvgED%2FbtrA1BkI7dt%2FRxfisErahSo9CZnK2WMCEk%2Fimg.png)
▶ 새로운 숫자의 10의 자리 값 : 기존 입력값의 1의 자리 값 <br>
▶ 새로운 숫자의 1의 자리 값 : 기존 입력값의 10의 자리와 1의 자리를 더한 값의 1의 자리 값<br>
이때 기존 입력값인 N이 다시 돌아올때까지 이것을 반복한다.<br>

![A](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlyI8B%2FbtrA1Bd31EV%2FteL6nEzghnL1LEWh0rgf6K%2Fimg.png "A")
    - 기존 1의 자리(one) : N % 10
    - 기존 10의 자리(ten) : (N - one) / 10
                               = (N - (N % 10)) / 10
    - 새로운 숫자 : (one * 10)   // 새로운 숫자의 10의 자리 = 기존 1의 자리 * 10
                           + ((ten + one) % 10)  // 기존 숫자의 10의 자리 + 1의 자리의 1의 자리
                        = ((N % 10) * 10)
                          + ((((N - (N % 10)) / 10) + (N % 10)) % 10)

```java
import java.util.Scanner;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int copy = N;
        int count = 0;
        
        while(true) {
            // N의 값을 새로운 값으로 저장
            N = ((N % 10)*10) + ((((N - (N % 10))/10) + (N % 10))%10);
            count++;
            
            if(N==copy) { // 기존의 N의 값(=copy)가 N의 값과 같을때 반복문 break
                break;
            }
        }
        System.out.println(count);
    }
}

```
