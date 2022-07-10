> **KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다. 인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다. 그러면 인공지능 오븐은 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산한다. <br>또한, KOI 전자의 인공지능 오븐 앞면에는 사용자에게 훈제오리구이 요리가 끝나는 시각을 알려 주는 디지털 시계가 있다. <br>훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다. <br>- 출력<br>첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. (단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)** <br>

https://www.acmicpc.net/problem/2525 

![no.2525](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbqBGHM%2FbtryE10eT7O%2F5zPbjGPyKo4FjE9JsXEQv1%2Fimg.png "no.2525")

<span style="color:red">→ 여러번 틀렸던 문제 : <br></span>
![error record](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuUrlP%2Fbtrzc9JH7qn%2FbAf6XkK6bnrkKpakhLoHt0%2Fimg.png "error record")
계속 에러가 나서 며칠 동안 계속해서 수정한 문제다. <br>

중간에 난 컴파일 에러와 제출 번호 4187961은 괄호와 콘솔에 다른 내용을 찍어본 것을 그대로 올려서 발생한 에러라 실질적으로 도전한 것은 8번 정도 되는 것 같다.<br>

콘솔에 그냥 테스트해볼때는 예제가 다 성공했었는데 그 코드를 그대로 백준에 입력했을 때는 자꾸 틀렸다는 결과가 떠서 당황했다. <br>

처음부터 다시 입력해본 결과** [ 입력한 분 + 요리시간(M)이 60이 아니면서 60이 넘을 때 ]**에서 많이 헤맸는데 특히, **M에서 60분을 빼고도 60보다 큰 수가 남아있을 경우**에 오류가 발생한 것 같았다.<br>
![final](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0QJVk%2FbtrzeYNYWbk%2FdM5sSsMBYSQdox7WK1gwKk%2Fimg.png "final")
그래서 분+요리시간을 60으로 나눠 그 값을 60에 곱해 M에서 빼도록 작성했다.<br>
```java
import java.util.*;
 
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int A = sc.nextInt(); // 시
        int B = sc.nextInt(); // 분
        int C = sc.nextInt(); // 요리시간
        
        int M = B + C; // 분 + 요리시간 합계
        
        int m = 0;
        int h = A + (M/60);
        
        if(h > 23) {
            h -= 24; // h가 24보다 클경우 h에서 24를 뺀다.
        }
 
        int div;
        if(M > 60) { // 분과 요리시간이 60분을 넘을때 
            div = M / 60; // 
            m = M;
            m += div;
        }
        if(M % 60 == 0) { // 분+요리시간이 정확히 60분일때 
            m = 0;
        }else if((M % 60 != 0) && M >= 60) { // 분+요리시간이 60분이 아니면서 분+요리시간이 60분이 넘을때 -> 분+요리시간에서 60을 빼고도 60미만이 남았을 경우가 문제가 됨
            div = M / 60;
            m = M - (60 * div);
        }else if(M < 60) { // 분+요리시간이 60분을 넘지 않을때 
            m = M;
        }
            
        System.out.println(h + " " + m);
    }
}

```
