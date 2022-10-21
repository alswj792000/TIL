세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다.
일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.
예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.
세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.
- 입력
첫째 줄에 시험 본 과목의 개수 N이 주어진다. 이 값은 1000보다 작거나 같다. 둘째 줄에 세준이의 현재 성적이 주어진다. 이 값은 100보다 작거나 같은 음이 아닌 정수이고, 적어도 하나의 값은 0보다 크다.
- 출력
첫째 줄에 새로운 평균을 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-2 이하이면 정답이다.

https://www.acmicpc.net/problem/1546
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeqEhRq%2FbtrGw2XZALW%2FdSZrVc7zpzl2iEdrvk5ij1%2Fimg.png)

------------

**방법1. BUFFEREDREADER 사용**
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9hEFm%2FbtrGx3v1J2g%2FMOiYcGNDFSKVU3qkkzV940%2Fimg.png)
BufferedReader을 이용해 시험본 과목의 개수와 각 점수를 입력받았다.
각 점수를 새로운 점수로 계산하기 위해 for문을 이용해 계산식을 돌렸는데 값이 계속 0이 출력되는 에러가 발생했다.
문제를 잘 읽어보니 예제 출력에서 정수가 아닌 실수의 형태로 출력되는것을 확인할 수 있었고 각 과목의 점수를 받는 score 배열을 int가 아닌 double로 변경했다.
배열을 double로 변경했음에도 원하는대로 값이 출력되지 않아 다시 문제를 확인해보니 모든 점수를 새로운 점수로 계산해야 했던 부분을 최대 점수는 제외했기때문에 발생했던 문제였다.
따라서 해당 부분을 수정했더니 원하는 대로 값을 출력받을수 있었다. 
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Scanner;
import java.util.StringTokenizer;
 
public class Main {
    public static void main(String[] args) throws NumberFormatException, IOException{
        Scanner sc = new Scanner(System.in);
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st;
 
        int num = Integer.parseInt(br.readLine()); // 시험 본 과목의 개수
        
        st = new StringTokenizer(br.readLine(), " "); // 각 과목의 점수
        br.close();
        
        double[] score = new double[num]; //
        int i = 0;
        while(st.hasMoreTokens()) {
            score[i] = Double.parseDouble(st.nextToken()); 
            i++;
        }
        
        Arrays.parallelSort(score); // 최댓값 구하기위해 오름차순 정렬
        double max = score[num-1]; // 최댓값
 
        
        for(int j = 0; j < num; j++) { // 문제 : int를 double로 바꿔도 원하는대로 값이 출력되지 않음 / 문제 해결 : max값을 빼서 고치는것이 아니라 <모든 값>을 고쳤다.
            score[j] = score[j]/max*100; // 최소값/최댓값*100 -> 자꾸 0으로 출력되는 이유 : int로 받아서 => double로 변경
        }
        
        double avg = 0;
        double sum = 0;
        for(int k=0; k < num; k++) {
            sum += score[k];
//            System.out.println("합계 : " + sum);
            avg = sum/num;
        }
        
        System.out.println(avg);
 
    }
}

```
