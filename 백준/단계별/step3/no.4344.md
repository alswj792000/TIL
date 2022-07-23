


> **대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.<br>- 입력<br>첫째 줄에는 테스트 케이스의 개수 C가 주어진다.<br>둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.<br>- 출력<br>각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.** <br>

https://www.acmicpc.net/problem/4344

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb5d7Rr%2FbtrHJbd7beS%2FMwxkFKw3t3Z0Y5zsZKSfY1%2Fimg.png "Q")

------------

###### Scanner 이용
Scanner을 사용해 테스트케이스의 개수와 입력받을 학생의 수, 학생들의 점수를 입력받고 소숫점 자리까지 출력할수 있도록 double을 사용해 각 점수의 합계와 평균을 구했다. <br>
 <br>
평균을 arr에 저장된 점수들과 비교해 평균을 넘은 사람의 수를 구해 비율을 구했다. <br>
![A](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnCaxS%2FbtrHDPjCHyb%2FzLZCUYJKqnhFK9l3SlRil0%2Fimg.png "A")

```java
import java.io.IOException;
import java.util.Arrays;
import java.util.Scanner;
 
public class Main {
    public static void main(String[] args) throws NumberFormatException, IOException{
        Scanner sc = new Scanner(System.in);
        
        int C = sc.nextInt(); // 테스트케이스의 개수 
        
        
        for(int i = 0; i < C; i++) {
            int N = sc.nextInt(); // 입력받을 학생의 수
            int[] arr = new int[N]; // 입력받은 점수 모음 (학생의 수만큼 받음)
            
            double sum = 0;
            double avg = 0;
            double count = 0;
            
            // 성적 입력
            for(int j = 0; j < N; j++) {
                int score = sc.nextInt();
                arr[j] = score; // 입력받은 점수 arr배열에 저장
                sum += score; // 성적 합 계산
            }
            
            avg = sum/N; // 평균
            
            // 점수가 평균을 넘은 사람의 수
            for(int j = 0; j < N; j++) {
                if(arr[j] > avg) {
                    count++;
                }
            }
 
//            System.out.println("합계 : " + sum);
//            System.out.println("평균 : " + avg);
//            System.out.println(Arrays.toString(arr));
//            System.out.println("평균 넘은 사람 수 : " + count);
            System.out.printf("%.3f%%\n",(count/N)*100);
 
        }
        
        sc.close();
    }
}


```
