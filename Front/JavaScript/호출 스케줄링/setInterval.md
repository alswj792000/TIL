# 호출 스케줄링 scheduling a call

일정 시간이 지난 이후에 원하는 함수를 실행(호출)할 수 있게 하는것을 말한다.<br>
자바스크립트 명세서에는 해당 내용이 명시되어 있지 않지만, 시중에 나와있는 자바스크립트 호스트 환경 대부분이 이와 유사한 메서드와 내부 스케줄러를 지원한다.

# setInterval

<pre>
    <code>
        let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
    </code>
</pre>

|               |                                                                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| func/code     | 실행하고자 하는 코드로, 함수 또는 문자열 형태<br> 대개 함수가 들어가며, 하위 호환성을 위해 문자열도 받을수 있지만 추천하지 않는다. |
| delay         | 실행 전 대기 시간.<br> 단위는 밀리초(millisecond, 1000밀리초 = 1초)이며 기본값은 0이다.                                            |
| arg1, arg2... | 함수에 전달할 인수(매개변수)<br> IE9이하에선 지원하지 않는다. <br>선택적으로 사용한다.                                             |

<br>

- 일정 시간 간격(`delay` 밀리초)을 두고 주기적/규칙적으로 인자(`func`)를 실행하는 함수
  - `중첩 setTimeout`을 사용해도 일정 시간 간격으로 주기적으로 실행할 수 있다.<br>[`setTimeOut`](https://github.com/alswj792000/TIL/blob/main/JavaScript/%ED%98%B8%EC%B6%9C%20%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81/setTimeOut.md "setTimeOut.md")
- 크롬, 파이어폭스를 포함한 대부분의 브라우저에서는 `alert/confirm/prompt`창이 떠있는 동안에도 내부 타이머를 멈추지 않는다.
  - 2초마다 alert창이 뜨는 setInterval 함수를 실행한다고 했을때, 첫번째 alert창이 떴을 때 몇 초간 기다렸다가 창을 닫으면 두번째 alert 창이 바로 나타나는것을 확인할 수 있다. <br> 이때 명시한 지연시간이 2초보다 alert창이 뜨는 간격이 짧아진다.
- 함수 호출을 중단하려면 `clearInterval(timerId)`를 사용한다.

# clearInterval()

<pre>
    <code>
        clearInterval(timerId)
    </code>
</pre>

|         |                                                                         |
| ------- | ----------------------------------------------------------------------- |
| timerId | 취소하려는 반복 작업의 식별자 <br>`setInterval()` 호출에 의해 반환된다. |

- `setInterval`의 작업을 취소한다.
- `clearInterval()`을 해주지 않으면 무한적으로 반복되기때문에 중지하는 시점에서 필수적이다.
  - `setInterval`의 경우 `clearInterval`이 호출되기 전까지 함수에 대한 참조가 메모리에 유지된다.<br>함수가 메모리에 남아있는 동안에는 외부 변수 또한 메모리에 남아있고 이럴 경우 실제 함수가 차지했어야 하는 공간보다 더 많은 메모리 공간이 사용된다.
- setInterval 작업을 종료해주지 않으면 무한 루프들이 중복되어 사이트가 느려지는 `병목현상`이 발생할 수 있다.

---

## setInterval 사용시 주의 점

### :exclamation: `setInterval`은 지연간격을 보장하지 않는다.

<pre>
    <code>
        let i = 1;
        setInterval(function() {
        func(i++);
        }, 100);
    </code>
</pre>

위 코드에서 내부스케줄러는 func(i++)을 100밀리초마다 실행한다.<br>
![enter image description here](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://k.kakaocdn.net/dn/QtrAx/btrQORMnNpH/8xB0fYudkD5N0QwXoAkRF1/img.png)<br>

**`setInterval`을 사용할 경우** `func`를 실행하는데 소모되는 시간도 지연 간격에 포함시키기 때문에 **`func` 호출 사이의 지연 간격이 실제 명시한 간격보다 짧아진다.**<br>
`func`을 실행하는데 걸리는 시간이 명시한 지연 간격보다 길 때는, 엔진이 `func`의 실행이 종료될때까지 기다려준다.<br>
`func`의 실행이 종료되면 엔진은 스케줄러를 확인하고 지연시간이 지났을 경우 다음 호출을 바로 시작한다.<br>
함수 호출에 걸리는 시간이 매번 `delay`되는 밀리초보다 길면, 모든 함수가 쉼 없이 연속으로 호출된다.<br>
<br>
=> 지연 없는 `setInterval`에서 호출이 5회 이상 이뤄지면, 4밀리초 이상의 지연 간격이 강제로 더해진다.<br>

# References.

<https://ko.javascript.info/settimeout-setinterval><br>
<https://developer.mozilla.org/en-US/docs/Web/API/clearInterval><br>
<https://egg-programmer.tistory.com/200><br>
<https://intrepidgeeks.com/tutorial/javascript-setinterval-prevents-repeated-execution-setinterval-clearinterval><br>
