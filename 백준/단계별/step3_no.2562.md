> **9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오. <br>예를 들어, 서로 다른 9개의 자연수 3, 29, 38, 12, 57, 74, 40, 85, 61 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다. <br>- 입력<br>첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.<br>- 출력<br>첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.** <br>

https://www.acmicpc.net/problem/2562

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnleMA%2FbtrBRodbHax%2F9Wu7DOnLvQkJD1JzIBkOhK%2Fimg.png "Q")

------------

    조건 1. 입력한 숫자의 개수는 9개
    조건 2. 입력한 숫자 중 최댓값을 출력
    조건 3. 최댓값이 입력한 숫자 중 몇번째로 입력되었는지 출력

- Scanner와 Arrays.sort 사용

![A](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcc8hqA%2FbtrBSf8h2V0%2FrAwYPRMqGQ5aplQyTL2QS1%2Fimg.png "A")

입력 받은 값 중 최댓값을 출력하기 위해 입력값을 담은 배열을 **Arrays.sort() 메서드로 오름차순으로 정렬하고 배열의 마지막 값을 출력**하였다. <br>
<br>
문제는 최댓값이 입력한 숫자 중 몇번째 숫자인지를 출력하는 부분이었다.<br>
for문을 이용해서 최댓값과 배열의 j번째 값이 같을때 count를 j로 설정해 해당값을 출력하도록 구현했는데 이 부분에서 무조건적으로 8이 출력되었다. <br>
최댓값을 구하기위해 Arrays.sort()메서드로 오름차순으로 배열의 순서가 다시 정렬되었기때문에 최댓값의 순서도 맨 마지막 순서인 8로 출력된것같았다. (0부터 시작했기때문에 8출력)<br>
그래서 Arrays.sort()대신 for문을 이용해 최댓값을 구해보기로 했다.

------------

- Scanner와 for문 사용
![A2](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbZaSmh%2FbtrBQE9d9Jo%2Fr15FlhrZ6cVAAU693eRVA0%2Fimg.png "A2")
최댓값을 구하기위해 nList배열의 값이 nList의 첫번째값보다 클때, 해당 값을 max에 넣도록 for문을 사용했다. <br>
이 경우 배열의 순서가 변경되지 않기때문에 for문을 이용해 최댓값의 순서를 출력할 수 있었다.

```java
import java.util.Scanner;
 
public class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        int n;
        int[] nList = new int[9];
        // 9개의 자연수 입력받기
        for(int i = 0; i < nList.length; i++) {
            n = sc.nextInt();
            nList[i] = n;
        } 
        
        // 입력받은 값 중 최댓값 출력 : 정렬
//        Arrays.sort(nList); 
//        int max = nList[8];
        
        // Math.max
        int max = nList[0];
        for(int i = 0; i < nList.length; i++) {
            if(nList[i] > max) {
                max = nList[i];
            }
        }
        System.out.println(max);
 
        // 최댓값이 입력한 숫자 중 몇 번째 숫자인가?
        int count = 1;
        for(int j = 0; j < nList.length; j++) {
            if(max == nList[j]) {
                count = j+1;
                System.out.println(count); 
                break;
            }
        }
    }
}


```
