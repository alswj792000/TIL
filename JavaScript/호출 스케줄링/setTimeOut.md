# 호출 스케줄링 scheduling a call

일정 시간이 지난 이후에 원하는 함수를 실행(호출)할 수 있게 하는것을 말한다.<br>
자바스크립트 명세서에는 해당 내용이 명시되어 있지 않지만, 시중에 나와있는 자바스크립트 호스트 환경 대부분이 이와 유사한 메서드와 내부 스케줄러를 지원한다.

# setTimeout

<pre>
    <code>
    let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)    
    </code>
</pre>

|               |                                                                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| func/code     | 실행하고자 하는 코드로, 함수 또는 문자열 형태<br> 대개 함수가 들어가며, 하위 호환성을 위해 문자열도 받을수 있지만 추천하지 않는다. |
| delay         | 실행 전 대기 시간.<br> 단위는 밀리초(millisecond, 1000밀리초 = 1초)이며 기본값은 0이다.                                            |
| arg1, arg2... | 함수에 전달할 인수<br> IE9이하에선 지원하지 않는다.                                                                                |

- 일정 시간(`delay` 밀리초)이 지난 후에 인자(`func`)를 실행하는 함수
- 인자로 함수, 문자열을 실행할 수 있다.

  - 이때 문자열을 사용하는것은 추천하지 않고, 되도록 `익명 화살표 함수`를 사용하는것을 추천한다.
  <pre>
    <code>
        setTimeout("alert('안녕하세요.')", 1000); // 추천X
  
        setTimeout(() => alert('안녕하세요.'), 1000); // 추천하는 방법
    </code>
  </pre>

- 스케줄링을 취소하고 싶을때는 `clearTimeout`과 setTimeout을 호출하면 반환되는 `타이머 식별자(timer identifier)`을 사용한다.

# clearTimeout

<pre>
    <code>
        let timerId = setTimeout(...);
        clearTimeout(timerId);
    </code>
</pre>

|         |                                                                         |
| ------- | ----------------------------------------------------------------------- |
| timerId | 취소하려는 반복 작업의 식별자 <br>`setInterval()` 호출에 의해 반환된다. |

- `clearTimeout`은 `clearTimeout`이 발생하기 전에 이미 설정한 시간 초과를 취소하려는 경우에 주로 사용된다.
- 필수적으로 사용해야하는것은 아니다.

# 중첩 setTimeout

`중첩 setTimeout`을 사용하면 setInterval과 같이 일정 간격을 두고 인자를 실행할 수 있다.<br>

<pre>
    <code>
        /** setInterval을 이용하지 않고 아래와 같이 중첩 setTimeout을 사용함
        let timerId = setInterval(() => alert('째깍'), 2000);
        */
  
        let timerId = setTimeout(function tick() { // 5번째 줄
            alert('째깍');
            timerId = setTimeout(tick, 2000); // (*)
        }, 2000);
    </code>
</pre>

다섯번째 줄의 setTimeout은 (\*)로 표시된 줄의 실행이 종료되면 다음 호출을 스케줄링한다. <br>

- 호출 결과에 따라 다음 호출을 원하는 방식으로 조정해 스케줄링 할 수 있기때문에 `setInterval`을 사용하는것보다 유연하다.
- CPU 소모가 많은 작업을 주기적으로 실행하는 경우에도 지연간격을 보장하기때문에 유용하다.
- `setInterval`과 달리 지연 간격을 보장한다.

# 대기 시간이 0인 `setTimeout`

- `setTimeout(func, 0)` / `setTimeout(func)`을 사용하면 `setTimeout`의 대기시간을 0으로 설정할 수 있다.
- 대기시간을 0으로 설정할 경우 `func`를 가능한 한 빨리 실행할 수 있다.
  - 이때 스케줄러는 현재 실행중인 스크립트의 처리가 종료된 이후에 스케줄링한 함수를 실행한다.

**따라서 이런 특성을 이용해 현재 스크립트의 실행이 종료된 직후에 원하는 함수가 실행되도록 할 수 있다.**<br>

<pre>
    <code>
        setTimeout(() => alert("World"));

        alert("Hello");
    </code>
</pre>

위 코드에서 첫번째 줄은 '0밀리초 후에 함수 호출하기'라는 할 일을 계획표에 기록하는 역할을 한다.
하지만 스크립트 스케줄러는 현재 스크립트(두번째 줄 alert)의 실행이 종료되고 계획표에 기록된 일을 확인하므로 `Hello`가 먼저 출력되고 `World`는 그 다음에 출력된다.

---

### setTimeout 사용시 주의 점

### :exclamation: `setTimeout`에서 함수 실행시 함수 뒤에 `()`를 붙이면 안된다.

`seTimeout`은 함수의 참조값을 받도록 되어있는데 `()`을 붙일 경우에는 함수 실행결과가 전달된다.<br>
이때 해당 함수에 반환문이 없으면 호출 결과는 `undefined`가 되어 `setTimeout`은 스케줄링할 대상을 찾지 못해 원하는대로 코드가 동작하지 않는다.<br>

<pre>
    <code>
        function sayHi(who, phrase) {
            alert( who + ' 님, ' + phrase );
        }
        setTimeout(sayHi(), 1000); // 잘못된 코드
        setTimeout(sayHi, 1000); // 옳은 코드
    </code>
</pre>

### :exclamation: `setTimeout`은 지연 간격을 보장한다.

<pre>
    <code>
        let i = 1;
        setTimeout(function run() {
            func(i++);
            setTimeout(run, 100);
        }, 100);
    </code>
</pre><br>

![enter image description here](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://k.kakaocdn.net/dn/tPsIs/btrQOCWsjH3/vuDLsLaIY88ISwNdS1khd0/img.png)<br>
중첩 setTimeout을 사용하면 명시한 지연(이 코듣에서는 100ms)이 보장된다.<br>
이전 함수의 실행이 종료된 이후에 다음 함수 호출에 대한 계획이 세워지기때문에 지연간격이 보장될 수 있다.<br>

---

# References.

<https://ko.javascript.info/settimeout-setinterval><br>
<https://stackoverflow.com/questions/7391567/when-using-settimeout-do-you-have-to-cleartimeout><br>
