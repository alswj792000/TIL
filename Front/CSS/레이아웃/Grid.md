# Grid Layout

- **2차원**(행과 열)의 레이아웃 시스템을 제공
  - **두 방향(가로-세로) 레이아웃 시스템**
- 핵(Hack)으로 불린 다양한 레이아웃 대체 방식들을 해결하기 위해 만들어진 특별한 CSS 모듈
- 파이어폭스와 크롬의 개발자 도구에서 grid를 명확하게 보여주는 기능 有

###### CSS 핵(Hack)

특정 브라우저를 제외하거나, 특정 브라우저에만 CSS를 적용하는 기법을 말한다.
문법적으로 맞지 않거나, 특정 브라우저에서만 작동되는 비표준인 경우가 많기때문에 어쩔수 없는 경우가 아니라면 사용하지 말아야 한다.

# Grid의 구성

- 부모 요소(상위) : Grid Container
- 자식 요소(하위/복수) : Grid Item

→ 컨테이너가 Grid의 영향을 받는 전체 공간이고, 설정된 속성에 따라 각각의 아이템들이 어떤 형태로 배치되는 것

# Grid의 사용

정렬하려는 요소의 부모 요소에 `display: grid` 속성을 선언한다.

## Grid 용어 정리

![grid-word](https://studiomeal.com/wp-content/uploads/2020/01/03-2.jpg)

- 그리드 컨테이너 Grid Container : `display: grid`를 적용하는 그리드의 전체 영역.
- 그리드 아이템 Grid Item : 그리드 컨테이너의 자식 요소들. 아이템들이 Grid 규칙에 의해 배치된다.
- 그리드 트랙 Grid Track : 그리드의 행(Row) 또는 열(Column)
- 그리드 셀 Grid Cell : 그리드의 한 칸을 가리킴
- 그리드 라인 Grid Line : 그리드 셀을 구분하는 선
- 그리드 번호 Grid Number : 그리드 라인의 각 번호
- 그리드 갭 Grid Gap : 그리드 셀 사이의 간격
- 그리드 영역 Grid Area : 그리드 라인으로 둘러싸인 사각형 영역으로, 그리드 셀의 집합

## Grid-Container에 적용하는 속성

<details>
<summary>접기/펼치기</summary>

### display:grid;

- 아이템들이 block 요소일 경우, 큰 변화 없음
- `inline-grid`는 컨테이너가 주변 요소들과 어떻게 어우러질지 결정하는 값으로 inline-block과 같이 동작한다.

## 그리드 형태 정의

</details>
<br>

# References.

<https://it-blog.tistory.com/13><br>
<https://heropy.blog/2019/08/17/css-grid/>
