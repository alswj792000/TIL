 StringBuilder는 변경 가능한, 즉 수정 가능한 연속 문자를 만드는 데 사용되는 클래스다. <br>
StringBuffer와 마찬가지로 Java Strings 클래스(불변 클래스)의 대안으로 사용된다. (가변 클래스이기 때문에 값을 변경할 수 있고 추가할 수 있다.)<br>

------------

**▶ StringBuffer와 StringBuilder의 차이점 **
동기화의 유무.<br>
StringBuffer는 동기화 키워드를 지원하여 멀티스레드 환경에서 안전하다.(thread-safe)<br>
○ String도 불변성을 가지기 때문에 마찬가지로  멀티스레드 환경에서의 안정성(thread-safe)을 가지고 있다.<br>
StringBuilder는 동기화를 지원하지 않는다. <br>
그렇기 때문에 Java의 StringBuilder가 StringBuffer보다 빨라 단일 스레드로 작업할 때 더 적합한 선택임을 의미한다.<br>

------------

StringBuilder도  StringBuffer와 마찬가지로 기본값은 16개의 문자를 저장할 수 있는 크기이며, 생성자를 통해 그 크기를 별도로 설정할 수도 있다.<br>
하지만 객체 생성 시 사용자가 설정한 크기보다 언제나 16개의 문자를 더 저장할 수 있도록 여유 있는 크기로 생성된다.<br>
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbzW1jC%2FbtrBhj4w5qo%2FP0VzbwWZ6ySIFj9Rga7nNk%2Fimg.png)

    ▶ capacity() : 할당된 문자 공간의 수.
    빈 콘텐츠로 stringbuilder를 생성하려고 하면 기본적으로 초기화 크기를 0+16인 길이+16으로 사용한다.
    따라서 기본 용량은 16.
    * 참고: capacity() 메서드에서 반환되는 용량은 항상 길이보다 크거나 같으며(일반적으로 보다 큼) 문자열 작성기에 추가할 수 있도록 필요에 따라 자동으로 확장된다.
    ▶ length() :  문자열의 길이를 알고자 할 때 사용

StringBuilder 클래스는 java.lang 패키지(https://docs.oracle.com/javase/8/docs/api/)에 포함되어 제공된다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FAsWzo%2FbtrBhRGHeds%2FFDUzUTOlBr6fEMlvDSEb21%2Fimg.png)

------------

**메서드**
**▶ append() 메서드**
append() 메서드는인수로 전달된 값을 문자열로 변환한 후, 해당 문자열의 마지막에 추가한다.<br>
이 메서드는 String 클래스의 concat() 메서드와 같은 결과를 반환하지만, 내부적인 처리 속도가 훨씬 빠르다.<br>
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHW1iZ%2FbtrBgEasZjZ%2F0SWM85KKXYHR4bMnumlOLk%2Fimg.png)

    ▶ StringBuilder.append(String str) : StringBuilder
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqP5NM%2FbtrBhv4VnTu%2FtsaFkG7noVpibwWDurOgb0%2Fimg.png)

**▶ insert() 메서드**
insert() 메소드는 인수로 전달된 값을 문자열로 변환한 후, 해당 문자열의 지정된 인덱스 위치에 추가한다.<br>
이때 전달된 인덱스가 해당 문자열의 길이와 같으면, append() 메서드와 같은 결과를 반환한다.<br>
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeMf3Mw%2FbtrBip3Xo8e%2FFdIKSPeckLmEW6yn7kLu0K%2Fimg.png)

    ▶ StringBuilder.insert(int offset, String str) : StringBuilder
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHLVTQ%2FbtrBgqDA8jo%2F5jNmWLRhqRCxjhwyUZyrTK%2Fimg.png)
- offset : 원하는 위치에 str을 추가하는 메소드

**▶ delete() 메서드**
delete() 메서드는 전달된 인덱스에 해당하는 부분 문자열을 해당 문자열에서 제거한다.<br>
또한, deleteCharAt() 메서드를 사용하면 특정 위치의 문자 한 개만을 제거할 수도 있다. <br>
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Ftoy1T%2FbtrBgY02o6p%2Ffy4Sxx8mH0rzFO5RIcxJkK%2Fimg.png)

    ▶ StringBuilder.delete(int start, int end) : StringBuilder
    start <= index < end : 마지막 index는 포함하지 않는다
    
    ▶ StringBuilder.deleteCharAt(int index) : StringBuilder
    특정 위치의 문자 한 개 만을 제거할 때 사용한다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F15BFR%2FbtrBhRmU3sh%2FZaQHDR6fY3FGVtdtXOYTHK%2Fimg.png)
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcLPkF3%2FbtrBgoy7vPp%2FazKDTBAtN0mWfqAUheDV1k%2Fimg.png)

------------

[ 참고 링크 ]

https://www.simplilearn.com/tutorials/java-tutorial/stringbuilder-in-java#:~:text=StringBuilder%20in%20Java%20is%20a,an%20immutable%20succession%20of%20characters.
www.simplilearn.com
https://doongi9.tistory.com/entry/11-%EA%B8%B0%EB%B3%B8API
https://ifuwanna.tistory.com/221
https://stackoverflow.com/questions/3184244/stringbuilder-capacity
