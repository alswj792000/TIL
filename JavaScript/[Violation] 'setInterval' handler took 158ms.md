# [Violation] 'setInterval' handler took 158ms

Chrome 위반은 Chrome 또는 자체 웹 앱의 오류를 나타내지 않고, 앱을 개선하는데 도움이 되는 경고이다.
이 경고가 발생할 경우 스크립트 속도를 높일 수 있는 기회가 있다.

> 오래 걸리는 스크립트의 경우 무조건 비동기 메서드(promise 등) 쓰라는 가이드

setTimeout과 같은 비동기 함수 내부에서 중단점을 사용해 코드를 디버깅할때도 이러한 종류의 메세지가 표시될 수 있다.
이 경우 숫자는 비동기 함수에서 멈추는 시간에 따라 다르다.

나의 경우 setInterval 함수를 중단하는 과정에서 발생하는 경고였다.
okky에서 본바에 따르면 실 사용시 추천하지 않는다고,,,? DOM 이벤트 사용?

---

# References.

<https://stackoverflow.com/questions/42218699/chrome-violation-violation-handler-took-83ms-of-runtime>
