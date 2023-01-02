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

## matches
- 요소가 주어진 css 선택자와 일치하는지 여부를 판단
    - 일치하면 `true`, 아니면 `false`

## closest
- 요소 자기 자신을 포함해 css 선택자와 일치하는 가장 가까운 조상 요소를 찾는다.
- 해당 요소부터 시작해 DOM 트리를 한 단계씩 거슬러 올라가면서 원하는 요소를 찾는다.
- css 선택자와 일치하는 요소를 찾으면 검색을 중단하고 해당 요소를 반환한다.

## getElementBy*
- 태그나 클래스 등을 이용해 원하는 노드를 찾아준다.
    - `querySelector`를 이용하는것이 더 편리하고 문법도 짧기때문에 요즘 잘 쓰이지 않는 편

- element.getElementsByTagName(tag) : 주어진 태그에 해당하는 요소를 찾고, 대응하는 요소를 담은 컬렉션을 반환한다. 매개변수 `tag`에 `"*"`이 들어가면 모든 태그가 검색된다.
- element.getElementsByClassName(className) : class 속성값을 기준으로 요소를 찾고, 대응하는 요소를 담은 컬렉션을 반환한다.
- document.getElementsByName(name) : 문서 전체를 대상으로 검색을 수행한다. name을 기준으로 검색하며 검색 결과를 담은 컬랙션을 반환한다.

---
# References.
<https://ko.javascript.info/searching-elements-dom>