# v-bind

- html 속성인 id, class, style등에 대해 model의 데이터를 연결할 때 사용된다. (.attr()와 비슷한 기능을 수행한다.)
- 편의상 v-bind를 생략하고 :로만 사용하기도 한다.
- 단순한 문자열, 숫자 등의 값 뿐만 아니라 boolean, 객체를 바인딩 시킬수도 있다.
    - boolean : disabled나 editable처럼 값 없이 속성만 사용되는 경우에 적용이 된다.
    - 객체를 통째로 바인딩하는 경우는 객체의 속성들을 모드 바인딩하는 경우이며 이 경우에는 v-bind를 생략 할 수 있다.


    v-bind:속성명=사용할 값
    :속성명=사용할 값

## 동적 속성 바인딩
- 값이 아니라 속성 이름 자체를 바인딩할때 사용된다.
- []로 전달인자를 묶어준다.
* attributeName과 연결되는 속성은 소문자로 변경되서 연결된다.

v-bind:[attributeName] = value
  

---

# References.
https://goodteacher.tistory.com/532
https://www.notion.so/Vue-js-Age-of-Vue-js-5643c27669aa4b3eb83391991f38b689?p=363242ff9a2e42158d5407b3ae524944&pm=s
https://vuejs.org/api/sfc-css-features.html#v-bind-in-css

