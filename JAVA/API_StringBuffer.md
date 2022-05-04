String 클래스의 객체(Instance)는 한 번 생성되면 그 값을 읽기만 할 수 있고 변경할 수는 없지만(불변 클래스), StringBuffer 클래스의 객체(Instance)는 그 값을 변경할 수도 있고 추가할 수도 있다.(가변 클래스)<br>

 

이를 위해 StringBuffer 클래스는 내부적으로 버퍼(buffer)라고 하는 독립적인 공간을 가진다.<br>버퍼 크기의 기본값은 16개의 문자를 저장할 수 있는 크기이며, 생성자를 통해 그 크기를 별도로 설정할 수도 있다.<br>하지만 객체 생성 시 사용자가 설정한 크기보다 언제나 16개의 문자를 더 저장할 수 있도록 여유 있는 크기로 생성된다.<br>
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FABeNE%2FbtrBbL7Qonc%2FmR8mtoVlNaBFgVHLUfJVxk%2Fimg.png)
▶ capacity() :  StringBuffer 인스턴스의 현재 버퍼 크기를 반환 (기본 16byte+문자크기)
▶ length() :  문자열의 길이를 알고자 할 때 사용
<br>
덧셈(+) 연산자를 이용해 String 인스턴스의 문자열을 결합하면, 내용이 합쳐진 새로운 String 인스턴스를 생성한다.
따라서 문자열을 많이 결합하면 결합할수록 공간의 낭비뿐만 아니라 속도 또한 매우 느려지게 된다.
하지만 StringBuffer 객체를 사용하면 문자열을 바로 추가할 수 있으므로, 공간의 낭비도 없으며 속도도 매우 빨라진다.
이러한 StringBuffer 클래스는 java.lang 패키지(https://docs.oracle.com/javase/8/docs/api/)에 포함되어 제공된다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvmORn%2FbtrBcJhoFvn%2Fm25eAXuKBxiiXmUb5IZ44K%2Fimg.png)

------------

**불변 클래스와 가변 클래스**
- 불변 클래스 (immutable class)
String 클래스와 같이 객체가 한 번 생성되면 그 값을 변경할 수 없는 클래스
String 클래스와 같은 불변 클래스는 StringBuffer 클래스의 append()나 insert() 메서드와 같이 값을 변경하는 set 메소드를 포함하지 않는다.
멀티 스레드 환경에서 객체가 변화되는 상황이라면 불변 인스턴스를 사용하는 것이 좀 더 신뢰할 수 있는 코드를 작성할 수 있다.
즉, 하나의 객체에 접근하면서 각각의 객체가 서로 영향을 주어서는 안 되는 경우에 불변 인스턴스를 사용하면 값이 변하지 않는다는 점이 보장됩니다.

- 가변 클래스 (mutable class)
: StringBuffer 클래스와 같이 자유롭게 인스턴스의 값을 변경할 수 있는 클래스

------------

- 메서드

**append() 메서드**
append() 메소드는 인수로 전달된 값을 문자열로 변환한 후, 해당 문자열의 마지막에 추가한다.
이 메소드는 String 클래스의 concat() 메서드와 같은 결과를 반환하지만, 내부적인 처리 속도가 훨씬 빠르다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbp4su3%2FbtrBaxvJ7e7%2F1ahaUfSUu3Ct8a7Yh7akN1%2Fimg.png)

▶ StringBuffer.append(String str) : StirngBuffer
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdQKkNg%2FbtrBhf7U232%2FXvoKOyH9fGVmEGGKBPtvB0%2Fimg.png)
append() 메서드의 반환값은 StringBuffer형(자기 자신 this)이고, StringBuffer뒤에는 append() 메서드를 붙일 수 있다. 따라서 메서드 체이닝이 가능하다.
append() 메서드 사용 후 버퍼의 용량과 길이가 늘어났지만 주소는 바뀌지 않은것을 확인할 수 있다. 

**insert() 메서드**
insert() 메소드는 인수로 전달된 값을 문자열로 변환한 후, 해당 문자열의 지정된 인덱스 위치에 추가한다.
이때 전달된 인덱스가 해당 문자열의 길이와 같으면, append() 메소드와 같은 결과를 반환한다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FegNe7Q%2FbtrBiaS3hOE%2Fv7qtqonNhe68KJTkNC7Br0%2Fimg.png)

▶ StringBuffer.insert(int offset, String str) : StrigBuffer
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FceQHGX%2FbtrBgcyuRNF%2FhxtXRfct7clR06Vfa8mHv1%2Fimg.png)
- offset : 원하는 위치에 str을 추가하는 메소드

**delete() 메서드**
delete() 메소드는 전달된 인덱스에 해당하는 부분 문자열을 해당 문자열에서 제거합니다.
또한, deleteCharAt() 메소드를 사용하면 특정 위치의 문자 한 개만을 제거할 수도 있습니다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6dNsP%2FbtrBfX2Bj97%2FWn2EINyRVpgk6Ei7fMsldK%2Fimg.png)

▶ StringBuffer.delete(int start, int end) : StringBuffer
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb69DXK%2FbtrBhRGrda8%2FqYI46zLjeWfbugVjvk9Zf0%2Fimg.png)
start <= index < end : 마지막 index는 포함하지 않는다

▶ StringBuffer.deleteCharAt(int index) : StringBuffer
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fol37b%2FbtrBhQndUJR%2FId6TWE9t6kBhkPiqkl68lK%2Fimg.png)

------------

StringBuffer클래스의 메서드
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbJw1QQ%2FbtrBgb0IDbx%2F2gIPS9XWquauzasMCNpFQ0%2Fimg.png)

[ 참고 링크 ]
http://www.tcpschool.com/java/java_api_stringBuffer
https://doongi9.tistory.com/entry/11-%EA%B8%B0%EB%B3%B8API

