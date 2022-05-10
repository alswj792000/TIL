StringTokenizer 클래스는 String클래스에서 제공하는 split()메소드와 같은 기능을 하는 클래스로, 생성 시 전달받은 문자열을 구분자로 나누어 각 토큰에 저장한다.

StringTokenizer의 메서드는 식별자, 숫자 및 인용 문자열을 구분하지 않으며 주석을 인식하고 건너뛰지 않는다.

구분 기호 집합(토큰을 구분하는 문자)은 생성 시 또는 토큰별로 지정할 수 있다.

------------

**생성자**
- StringTokenizer(String str) 생성자
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcAtvqY%2FbtrBiBqcqvG%2FttNDVKTVkQxTByTJyzqFik%2Fimg.png)

    ▶ StringTokenizer(String str) : StringTokenizer
    
    지정된 문자열에 대한 문자열 토크나이저를 생성한다.
    기본 구분 기호 집합은 [ \t, \n, \r, \f : 공백 문자, 탭 문자, 줄 바꿈 문자, 캐리지 리턴 문자 및 양식 공급 문자 ]이다.
    구분 기호 문자 자체는 토큰으로 처리되지 않는다. 
	

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbL1I1y%2FbtrBi8hohou%2FYKREw6TdsCU9Z2wrW3O071%2Fimg.png)

- StringTokenizer(String str, String delim) 생성자
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fxtaj7%2FbtrBibstiiH%2FMSHSV4hlGBjwQVAe52472k%2Fimg.png)

    ▶ StringTokenizer(String str, String delim) : StringTokenizer
    
    지정된 문자열에 대한 문자열 토크나이저를 생성한다.
    delim 인수의 문자는 토큰을 구분하는 구분 기호인데, 구분 기호 문자 자체는 토큰으로 처리되지 않는다.
    delim이 null인 경우 이 생성자는 예외를 throw하지 않지만, 결과적으로 StringTokenizer에서 다른 메서드를 호출하려고 하면 NullPointerException이 발생할 수 있다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnCX0V%2FbtrBhu7aLHX%2FVV1neq9qkJ878q1Y1t5Ka0%2Fimg.png)

- StringTokenizer(String str, String delim, boolean returnValue) 생성자
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbkkfc4%2FbtrBi7CQ6Im%2FLeqjKkYoUKAIWc7QAGSz0K%2Fimg.png)

    ▶ StringTokenizer(String str, String delim) : StringTokenizer
    
    지정된 문자열에 대한 문자열 토크나이저를 생성한다.
    delim 인수의 모든 문자는 토큰을 구분하는 구분 기호이다.
    returnDelims 플래그가 true이면 구분 기호 문자도 토큰으로 반환된다. 각 구분 기호는 길이가 1인 문자열로 반환됩니다.
    플래그가 false이면 구분 기호 문자는 건너뛰고 토큰 사이의 구분 기호로만 사용된다.
    
    delim이 null인 경우 이 생성자는 예외를 throw하지 않습니다. 그러나 결과적으로 StringTokenizer에서 다른 메서드를 호출하려고 하면 NullPointerException이 발생할 수 있다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRzdDC%2FbtrBiblH310%2F8xaXkiGRnP9A5GRAXNi180%2Fimg.png)

------------

**메서드**
- boolean hasMoreTokens() 메서드
hasMoreTokens() 메서드는 이 StringTokenizer에서 사용할 수 있는 토큰이 더 있는지 확인한다.

현재 위치 뒤에 있는 문자열에서 하나 이상의 토큰을 사용할 수 있는 경우 True를 반환하고 그렇지 않으면 false를 반환한다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl4uVC%2FbtrBkD2WvQk%2FXWjfi2N5rfYkMOk3k94341%2Fimg.png)

    ▶  StringTokenizer.hasMoreTokens() : boolean
    
    이 토크나이저의 문자열에서 사용할 수 있는 토큰이 더 있는지 테스트한다.
    현재 위치 뒤에 문자열에 하나 이상의 토큰이 있는 경우에만 반환값이 true이고, 그렇지 않으면 false이다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbLdqjJ%2FbtrBnLS3Swt%2FiWKc4XVNpjQcUurzRl4U8k%2Fimg.png)

- String nextToken() 메서드
StringTokenizer에서 다음 토큰을 차례로 반환하는 데 사용된다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXiy5z%2FbtrBipkokI7%2F3rf0K4Tk6I2yllNQaHrJGk%2Fimg.png)

    ▶ StringTokenizer.nextToken() : String
    
    ▶ StringTokenizer.nextToken(String delim) : String
    
    
    지정된 delim 매개변수를 기반으로 이 문자열 토크나이저에서 다음 토큰을 반환한다.
    
    문자열 토크나이저의 문자열에서 다음 토큰을 반환한다. 
    StringTokenizer 개체에서 구분 기호로 간주되는 문자 집합이 문자열 구분 기호의 문자로 변경된다. 그런 다음 현재 위치가 반환된 후 문자열의 다음 토큰이 반환된다. 현재 위치는 인식된 토큰을 넘어 진행된다. 이 호출 후에 새 구분 기호 집합이 기본값으로 유지된다.

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDmvdL%2FbtrBiZ5QXo7%2FYhbSV7nwmGZaIICnPDlGRK%2Fimg.png)
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVR7Jj%2FbtrBi7jiYtb%2FD94bS45vUehjvtPkGAJYHK%2Fimg.png)

- boolean hasMoreElements() 메서드
Enumeration 인터페이스 를 구현하는 객체는 한 번에 하나씩 일련의 요소를 생성합니다. 이 열거에 더 많은 요소가 포함되어 있는지 테스트하는 데 사용되는 열거 의 hasMoreElements() 메서드 . 열거형에 더 많은 요소가 포함되어 있으면 true, 그렇지 않으면 false를 반환합니다.
 
- Object nextElement() 메서드
Enumeration 인터페이스 를 구현하는 객체는 한 번에 하나씩 일련의 요소를 생성합니다. 이 열거 객체에 제공할 요소가 하나 이상 있는 경우 이 열거의 다음 요소를 반환하는 데 사용되는 열거 의 nextElement() 메서드입니다 . 이 메서드는 열거에서 요소를 가져오는 데 사용됩니다.
반환 값: 이 메서드는 이 열거형의 다음 요소에 true를 반환합니다.
예외: 이 메서드는 요소가 더 이상 존재하지 않으면 NoSuchElementException을 발생시킵니다.

- int countTokens() 메서드
메서드가 추가 예외를 생성하기 전에 이 토크나이저의 nextToken 메서드를 호출할 수 있는 횟수를 계산한다.
* 참고: 현재 위치는 프로세스 중에 진행되지 않는다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd3x8vS%2FbtrBnLlgjIk%2Fz30oFZZFCouJKkIhMxp6Kk%2Fimg.png)

    ▶ StringTokenizer.countTokens() : int
    
    이 토크나이저의 nextToken 메서드가 예외를 생성하기 전에 호출할 수 있는 횟수를 계산한다.
    최근 delimiter 세트를 사용하여 문자열에 남아 있는 토큰 수를 반환한다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcWSuOl%2FbtrBiqXTECZ%2Fz3fvu2CKzdoehmuvVlLWr0%2Fimg.png)

------------

[ 참고 링크 ]
https://www.javatpoint.com/string-tokenizer-in-java
https://www.baeldung.com/java-stringtokenizer
https://doongi9.tistory.com/entry/11-%EA%B8%B0%EB%B3%B8API
https://www.geeksforgeeks.org/stringtokenizer-hasmoretokens-method-in-java-with-examples/
https://www.geeksforgeeks.org/stringtokenizer-counttokens-method-in-java-with-examples/?ref=gcse
https://www.geeksforgeeks.org/stringtokenizer-nexttoken-method-in-java-with-examples/?ref=gcse
https://www.technicalkeeda.com/java-tutorials/java-stringtokenizer-nexttoken-delim
https://www.geeksforgeeks.org/enumeration-nextelement-method-in-java-with-examples/#:~:text=An%20object%20that%20implements%20the,get%20elements%20from%20the%20enumuration.
https://www.geeksforgeeks.org/enumeration-hasmoreelements-method-in-java-with-examples/

 





