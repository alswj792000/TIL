# [JavaScript] class 추가/변경/삭제
## className 과 classList
### className
- class 문자열 전체를 변경할 수 있다.
    - `element.className = 'class명'` : class 문자열 전체가 class명으로 변경됨

### classList
- 클래스 하나만 추가하거나 제거하고 싶을때 사용한다.
    - `element.classList.add('class명')` : 기존 class 속성을 유지한 채로 새로운 class를 추가
    - `element.classList.add/remove('class명')` : 기존의 class 속성은 유지되며, 인자로 사용된 class 값만 삭제
    - `element.classList.toggle('class명')` : 특정 동작에 따라 class값이 추가/삭제. <br>class값이 있을 경우 해당 class값을 삭제하고 `false` 반환/class값이 존재하지 않으면 class값을 추가하고 `true` 반환
    - `element.classList.toggle('class명', true or false)` : 특정 동작에 따라 class값이 추가/삭제. <br>두번째 값이 `true`일 경우 인자로 사용된 class값을 추가/`false`일 경우 class값 제거
    - `element.classList.contains('class명')` : 인자로 사용된 class값이 존재하는지 확인. class값이 존재하면 `true`, 존재하지 않으면 `false`반환
    - `element.classList.replace('교체할 class명', '새로운 class명')` : 존재하는 class 속성을 다른 class값으로 교체 


---
# References.
<https://velog.io/@ahn-sujin/Javascript-class-%EC%B6%94%EA%B0%80%EB%B3%80%EA%B2%BD%EC%82%AD%EC%A0%9C%EC%9D%BD%EA%B8%B0>