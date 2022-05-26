> **두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다.<br>예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. <br>수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다.<br>그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.<br>- 출력<br>첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.** <br>

https://www.acmicpc.net/problem/3052

![Q](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbZzxke%2FbtrDcYEaESa%2FT6uH5Ri0wmIY6bg6QEp1VK%2Fimg.png "Q")

------------

**Scanner + 배열**
10개의 수를 입력받는것과 입력받은 수들을 42로 나눈 나머지를 구하는것까지는 작성했으나 서로 다른 나머지가 몇 개 있는지 출력하는 부분에서 제대로 값이 출력되지 않았다.<br>

그래서 검색을 통해 나머지를 출력하는 부분을 참고해서 작성했다.<br>
![A](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb6SSoz%2FbtrDdJtirix%2FuhJnh4kmlCt9WKA7QIn8iK%2Fimg.png "A")
rArr[i]의 값과 rArr[i+1]의 값을 비교하기위해 논리값을 먼저 false로 선언한 후, 해당값들을 비교했을때 서로 같을 경우 tf의 값을 true로 선언하여 tf값이 false일 경우에만 count값이 올라가도록 했다.<br>

해당 방법은 이 블로그 글(https://velog.io/@cksgh989/123)을 참고하였다.<br>
