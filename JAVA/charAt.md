charAt()은 지정된 인덱스에서 문자를 반환하는 메서드로, 문자열의 문자는 왼쪽에서 오른쪽으로 인덱싱 된다.
인덱스는 0부터 시작하며 마지막 인덱스는 문자열 길이-1이다.

------------

**charAt을 이용해 문자열의 인덱스 값 출력**
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKuefC%2FbtrCp6JqziG%2FavKu2EBk5MI5W6dc513oi0%2Fimg.png)

<br>
**charAt을 이용해 숫자 출력**
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdxQ8Gn%2FbtrCrQeMYZJ%2FLEPVx2jZkeKSIMZTYDMpD0%2Fimg.png)
charAt 메서드를 이용해 출력한 문자를 int형으로 변경할 경우 아스키코드값으로 변환이 된다.
문자"0"을 int로 형변환 할 경우 반환되는 아스키코드값은 48이다.
따라서 위 코드의 경우 num.charAt(0) - 0을 실행시킬 경우 아스키코드값인 48에서 0을 뺀 48이 출력되고,
num.charAt(0) - 48을 실행시킬 경우 48에서 48을 뺀 값인 0이 출력된다.

------------

[ 참고 링크 ]

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
https://www.w3schools.com/jsref/jsref_charat.asp
https://cokes.tistory.com/80
