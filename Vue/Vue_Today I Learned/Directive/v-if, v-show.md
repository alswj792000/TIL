# v- if VS v-show
## v-if
- 조건에 따라 블록을 렌더링 하기위해 사용된다.
- 블록은 v-if의 표현식이 true값을 반환할 때만 렌더링 된다.
- v-else를 함께 사용할 수 있다.

### v-else
- v-for에 대한 else 블록을 나타낸다.
- v-if 또는 v-else-if 엘리먼트 바로 뒤에 있어야 인식할 수 있다.

### v-else-if
- Vue 2.1.0+부터 사용할 수 있다.
- v-if에 대한 "else if 블록"역할을 한다.
- 여러개 사용이 가능하다.

## v-show 
- 엘리먼트를 조건부로 표시하기위한 디렉티브이다. (v-if와 유사)
- v-show를 쓴 엘리먼트의 경우 항상 렌더링 되어 DOM에 남아있다.
- 조건에 따라 새로 렌더링 되는것이 아니라 단순히 엘리먼트의 CSS display 속성만을 전환한다.
    - display: none의 유무

*** v-if와 v-show를 함께 쓰는것은 권장되지 않는다.
---
# References.
https://v3.ko.vuejs.org/guide/conditional.html#v-if-%E1%84%83%E1%85%A2-v-show
https://doozi316.github.io/vuejs/2020/10/28/Vue7/
