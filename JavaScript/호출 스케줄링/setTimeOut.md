# 호출 스케줄링 scheduling a call

일정 시간이 지난 이후에 원하는 함수를 실행(호출)할 수 있게 하는것을 말한다.<br>
자바스크립트 명세서에는 해당 내용이 명시되어 있지 않지만, 시중에 나와있는 자바스크립트 호스트 환경 대부분이 이와 유사한 메서드와 내부 스케줄러를 지원한다.

# setTimeout

- 일정 시간이 지난 후에 함수를 실행시킨다.
- 함수, 문자열을 실행할 수 있다.

  - 이때 문자열을 사용하는것은 추천하지 않고, 되도록 `익명 화살표 함수`를 사용하는것을 추천한다.
    <pre>
    <code>
    let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
    
            setTimeout("alert('안녕하세요.')", 1000); // 문자열 : 추천하지 않는 방법
    
            setTimeout(() => alert('안녕하세요.'), 1000); // 대신 익명 화살표 함수 사용
        </code>
    
    </pre>

  - `setTimeout`에 함수를 넘길때 함수 뒤에 `()`을 붙일 경우 오류가 발생한다.
    - `seTimeout`은 함수의 참조값을 받도록 되어있는데 `()`을 붙일 경우에는 함수 실행결과가 전달된다. 이때 해당 함수에 반환문이 없으면 호출 결과는 `undefined`가 되어 `setTimeout`은 스케줄링할 대상을 찾지 못한다.
        <pre>
            <code>
                function sayHi(who, phrase) {
                    alert( who + ' 님, ' + phrase );
                }
        
                setTimeout(sayHi(), 1000); // 잘못된 코드
            </code>
        </pre>

- 스케줄링을 취소하고 싶을때는 setTimeout을 호출하면 반환되는 타이머 식별자(timer identifier)을 사용한다.
    <pre>
        <code>
            let timerId = setTimeout(...);
            clearTimeout(timerId);
        </code>
    </pre>
- 중첩 setTimeout을 이용하면 일정 간격을 두고 실행할 수 있다.

  - 호출 결과에 따라 다음 호출을 원하는 방식으로 조정해 스케줄링 할 수 있기때문에 `setInterval`을 사용하는것보다 유연하며, CPU 소모가 많은 작업을 주기적으로 실행하는 경우에도 지연간격을 보장하기때문에 유용하다.
  <pre>
      <code>
          /** setInterval을 이용하지 않고 아래와 같이 중첩 setTimeout을 사용함
          let timerId = setInterval(() => alert('째깍'), 2000);
          */
  
          let timerId = setTimeout(function tick() {
          alert('째깍');
          timerId = setTimeout(tick, 2000); // (*)
          }, 2000);
      </code>
  </pre>

|               |                                                                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| func/code     | 실행하고자 하는 코드로, 함수 또는 문자열 형태<br> 대개 함수가 들어가며, 하위 호환성을 위해 문자열도 받을수 있지만 추천하지 않는다. |
| delay         | 실행 전 대기 시간.<br> 단위는 밀리초(millisecond, 1000밀리초 = 1초)이며 기본값은 0이다.                                            |
| arg1, arg2... | 함수에 전달할 인수<br> IE9이하에선 지원하지 않는다.                                                                                |

---

# References.

<https://ko.javascript.info/settimeout-setinterval>
