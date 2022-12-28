> 웹 페이지 내에서 원하는 elements에 접근하는 방법

## getElementById
- 요소에 `id`값이 있을 경우 사용 가능
    - `id` : unique값
- 스크립트가 간단할때는 괜찮지만 이름이 충돌할 가능성이 있기때문에 추천하는 방식이 아님
- 코드만 보고 변수의 출처를 알기 힘듬

## querySelectorAll
- 요소의 자식 요소 중 주어진 css 선택자에 대응하는 모든 요소를 반환
- `:hover`나 `:active`와 같은 가상 클래스에도 사용이 가능
    - `document.querySelectorAll(':hover')` : 마우스 포인터가 위에 있는(hover 상태) 요소 모두를 담은 컬렉션이 반환

## querySelector
- 주어진 css 선택자에 대응하는 요소 중 첫 번째 요소를 반환
- 해당하는 요소를 찾으면 검색을 멈춤
- `element.querySelectorAll(css)[0]`와 동일하지만 속도가 더 빠르다.

---
# References.
<https://ko.javascript.info/searching-elements-dom>