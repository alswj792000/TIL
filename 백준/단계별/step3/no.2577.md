> **세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고, 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.<br>- 입력<br>첫째 줄에 A, 둘째 줄에 B, 셋째 줄에 C가 주어진다. A, B, C는 모두 100보다 크거나 같고, 1,000보다 작은 자연수이다.<br>- 출력<br>첫째 줄에는 A × B × C의 결과에 0 이 몇 번 쓰였는지 출력한다. 마찬가지로 둘째 줄부터 열 번째 줄까지 A × B × C의 결과에 1부터 9까지의 숫자가 각각 몇 번 쓰였는지 차례로 한 줄에 하나씩 출력한다.** <br>

https://www.acmicpc.net/problem/2577

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcYQhdN%2FbtrBWP3v68B%2F50c7HSrhxBk492xyjuSuAk%2Fimg.png "Q")

------------

![A](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoXgao%2FbtrB5Kg5lZq%2FbC8WtjcmbTQRNfyeFCuSe0%2Fimg.png "A")

num.charAt(j) - 0을 해주면 문자열num의 j번째 인덱스 자리의 값이 문자열이 아니라 숫자로 변환되어 출력된다.

예를들어 sum의 값이 12345이고 j가 0이라고할때, num.charAt(0)의 값은 문자"1"이다.

하지만, num.charAt(0) - 1일 경우에는 48로 출력된다. 이때 이 48은 문자"0"의 아스키코드를 말한다.

(48이 아니라 0으로 출력하고 싶을 경우에는 num.charAt(0) - 48을 해주면 된다.)

```java
import java.util.Scanner;

public class Main {
	public static void main(String[] args){
		// A, B, C 세 자연수 입력
		// AxBxC의 값에서 1-9까지의  숫자가 몇개 쓰였는지 출력
		Scanner sc = new Scanner(System.in);
		int A = sc.nextInt();
		int B = sc.nextInt();
		int C = sc.nextInt();
		
		int sum = A*B*C;
		String num = Integer.toString(sum);
//		System.out.println(num);
		
		// 곱한 값에서 0-9까지의 숫자가 몇개 쓰였는지 출력
//		int[] arr = new int[10];
		for(int i = 0; i < 10; i++) {
			int count = 0;
			for(int j = 0; j < num.length(); j++) {
				//  charAt(): String으로 저장된 문자열 중에서 한 글자만 선택해서 char타입으로 변환
				if(num.charAt(j)- '0' == i) { //0을 쓰지 않으면 값이 출력되지 않음
					count++;
				}
			}
			
			System.out.println(count);
		}
		
	}
}

```

-
[ 참고링크 ]
https://rightbellboy.tistory.com/41
