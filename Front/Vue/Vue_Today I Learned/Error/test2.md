# [Vue warn]: Invalid prop: type check failed for prop "width". Expected Number with value 100, got String with value "100".

`type: Number`을 지정하고 문자열 값을 넘기면 발생하는 오류
type 지정시 부모 컴포넌트는 정적인 값일때도 v-bind를 해줘야 한다.

나의 경우 v-bind(`:`)가 빠져서 발생한 오류였다.

---
# References.
<https://negabaro.github.io/archive/vuejs-props>