> **"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다.<br>문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다.<br>예를 들어, 10번 문제의 점수는 3이 된다."OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 0보다 크고 80보다 작은 문자열이 주어진다. 문자열은 O와 X만으로 이루어져 있다.<br>- 출력<br>각 테스트 케이스마다 점수를 출력한다.** <br>

https://www.acmicpc.net/problem/8958

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbHqEJm%2FbtrGQ5Z7e4L%2Fqw2pHmzCQkSzcqxscLTDmK%2Fimg.png "Q")

------------

###### Scanner 사용<br>
Scanner로 데이터를 입력받았고 charAt()을 통해 각 자릿수의 값이 'O'일 경우에는 count값을 점수에 더하고, 자릿수의 값이 'X'일 경우에는 count를 0으로 초기화해 O가 연속했을때의 점수를 구했다.<br>

![A](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FekNPYl%2FbtrHEXBHl6l%2FGcOaksOva2SjSIGK9QnsQK%2Fimg.png "A")
<br>
구현하면서 두가지 문제가 발생했다.<br>
<br>
첫번째 문제는 테스트케이스의 개수를 입력 받고 테스트 케이스를 입력받으려했는데 첫번째 입력이 빈칸으로 들어가 테스트 케이스가 원하는대로 들어가지 않는 문제가 발생했다.<br>
<br>
Scanner로 받은 nextInt를 입력하고 남은 /n이 문제였는데, nextInt는 입력할때 전송하는 /n(빈칸)은 가져오지 않기때문에 발생한 문제였다. <br>이 문제를 해결하기 위해 nextLine을 이용해 버퍼에 남은 /n을 받아주었고 문제가 해결되었다.<br>
<br>
두번째 문제는 테스트케이스의 점수를 출력하는 과정에서 첫번째 값을 제외한 값이 제대로 출력되지 않았다.<br>
점수를 산출하기위해 사용하는 score와 count의 값이 첫번째 값을 출력한 후 초기화 되지않아 발생하는것같았다.<br>
이를 해결하기위해 score와 count값을 테스트케이스를 입력받는 for문 안으로 넣어 for문이 반복되면 score와 count값이 초기화 되도록 했다.<br>

```java
import java.io.IOException;
import java.util.Scanner;
 
public class Main {
    public static void main(String[] args) throws NumberFormatException, IOException{
        Scanner sc = new Scanner(System.in);
        
        int num = sc.nextInt(); // 테스트케이스의 개수
        sc.nextLine(); 
        /*
         * [문제] 배열의 맨 첫자리가 빈칸으로 출력됨 
         * [해결] nextInt는 입력할때 전송하는 /n(엔터)는 가져오지 않기때문에  이것을 해결하기 위해 nextLine을 다시 사용해서 nextLine이 /n을 가져갈수 있도록 했다.
         */
        
//        int count = 0;
//        int score = 0;
        /* 
         * [문제] 두번째 값이 이상하게 나옴 -> score와 count값이 for문 밖에있어서 for문이 돌때마다 초기화 되지 않았음
         * [해결] for문 안으로 count와 score을 이동
        */
        int[] scoreArr = new int[num];
        
        for(int i = 0; i < num; i++) {
            String ox = sc.nextLine();
            
            int count = 0;
            int score = 0;
            for(int j = 0; j < ox.length(); j++) {
                if(ox.charAt(j) == 'O'){
                    count++;
                    score = score + count;
                    
                } else if (ox.charAt(j) == 'X') {
                    count = 0;
                }
                scoreArr[i] = score;
            }
        }
        
        sc.close();
        
        // 출력
        for(int i = 0; i < scoreArr.length; i++) {
            System.out.println(scoreArr[i]);
        }
 
    }
}

```

