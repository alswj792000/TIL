# Flex Layout

- **한 방향 레이아웃 시스템 (1차원)**
- viewport나 요소의 크기가 불명확하거나 동적으로 변할 때에도 효율적으로 요소를 배치, 정렬, 분산할 수 있는 방법을 제공하는 CSS3의 새로운 레이아웃 방식
- 복잡한 계산 없이 요소의 크기와 순서를 유연하게 배치할 수 있음
  - 정렬, 방향, 순서, 크기 등을 유연하게 조절할 수 있기때문에 별도의 분기 처리를 줄일 수 있고, CSS만으로 다양한 레이아웃을 구현할 수 있음
- `Flexible Box`, `Flexbox`

# Flex의 구성

- 부모 요소(상위) : flex container
- 자식 요소(하위/복수) : flex item

![image](https://d2.naver.com/content/images/2018/12/helloworld-201811-flex_01.png)

# Flex의 사용

정렬하려는 요소의 부모 요소에 `display: flex` 속성을 선언한다.

- `display:flex` 속성이 적용된 요소는 **flex container**
- flex container의 자식 요소는 **flex item**
- (`ul`과 `li`와 같은 관계)

<pre>
<code>
.flex_container {
  display: flex;
}
</code>
</pre>

# 부모 요소와 자식 요소에 정의하는 속성 구분

![image](https://d2.naver.com/content/images/2018/12/helloworld-201811-flex_02.png)

- flex container 속성(부모 요소): flex-direction, flex-wrap, justify-content, align-items, align-content
- flex item 속성(자식 요소): flex, flex-grow, flex-shrink, flex-basis, order

## flex-container에 적용하는 속성

<details>
<summary>접기/펼치기</summary>

### display:flex;

    <div class="flex-container">
    	<div class="flex-item1"></div>
    	<div class="flex-item2"></div>
    	<div class="flex-item3"></div>
    </div>
    <style>
    	.flex-container{ display: flex;}
    </style>

![display:flex](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbFF7sy%2FbtrTJvfdumE%2FYWIKAaJ7yIPX7ZS6Lv4km1%2Fimg.png)

→ flex 아이템들은 가로 방향으로 배치되고, 지정된 width만큼만 영역을 차지하게 된다.(`inline`요소와 같이) - 후에 정렬을 통해 height를 처리하는 방법에 대해서 조정할 수 있음

### 배치 방향 설정

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc7Li0T%2FbtrTKqkNMdJ%2FiJvglwisnpnt6N0YKRYnG0%2Fimg.png)

#### flex-direction: row;

아이템들이 행(가로)방향으로 배치<br>
![row](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FyW4Au%2FbtrTKKwvTnO%2FvBCBzD7opP5ZCa97Akdnl0%2Fimg.png)

#### flex-direction: column;

아이템들이 열(세로)방향으로 배치<br>
![column](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJdiRk%2FbtrTJvUnLvA%2F1ymAW5rRSzrF9LQTBaTpL1%2Fimg.png)

#### flex-direction: row-reverse;

아이템들이 역순으로 가로 배치<br>
![row-reverse](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FntyxJ%2FbtrTMgnUsNb%2FBJYoHhpP20WmXjwhFzLep0%2Fimg.png)

#### flex-direction: column-reverse;

아이템들이 역순으로 세로 배치<br>
![colunm-reverse](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQnEFO%2FbtrTHPr3K1I%2Fxqfwhwpgcf5OtwPpG4nTE0%2Fimg.png)

### 줄넘김 처리 설정

컨테이너가 더 이상 아이템들을 한 줄에 담을 여유 공간이 없을 때 아이템 줄바꿈에 대해 결정하는 속성

#### flex-wrap: nowrap;

기본값. 줄바꿈을 하지 않고, 너비에 맞게 높이가 줄어든다.<br>
![nowrap](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEdgeb%2FbtrTKaJg5bx%2Fck5FFlv9cScIIuetuYAKsK%2Fimg.png)

#### flex-wrap: wrap;

줄바꿈을 함. `float`이나 `inline-block`으로 배치한 요소들과 비슷하게 동작한다.<br>
![wrap](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2QxD6%2FbtrTKqrwr14%2FcbYKMozxxFrKqRmIQfbT2k%2Fimg.png)

#### flex-wrap: wrap-reverse;

줄바꿈을 하는데, 아이템을 역순으로 배치한다.<br>
![wrap-reverse](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcKuUwS%2FbtrTJv723Vc%2FaTlE0mITYmKpDIvusSACAk%2Fimg.png)

### flex-flow

- flex-direction과 flex-wrap을 한번에 지정할 수 있는 단축 속성
- flex-direction, flex-wrap의 순으로 한 칸 떼고 쓴다.
<pre>
  <code>
    flex-flow: row wrap;
    /* 아래의 두 줄을 줄여 쓴 것 */
    /* flex-direction: row; */
    /* flex-wrap: wrap; */
  </code>
</pre>

### 정렬

- `justify` : 메인축 방향으로 정렬
- `align` : 수직축 방향으로 정렬

#### 메인축 방향 정렬 justify-content

##### justify-content: flex-start;

아이템들을 시작점으로 정렬. flex-direction이 row(가로배치)일때는 왼쪽, column(세로배치)일때는 위쪽으로 정렬<br>

##### justify-content: flex-end;

아이템들을 끝점으로 정렬. flex-direction이 row(가로배치)일때는 오른쪽, column(세로배치)일때는 아래쪽으로 정렬<br>

##### justify-content: center;

아이템들을 가운데로 정렬 <br>

##### justify-content: space-between;

아이템들의 사이(between)에 균일한 간격을 만들어준다.<br>
![space-between](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FwvRJx%2FbtrTKp7iYWf%2F2xkpkoFkCgSBZfg84t1mvk%2Fimg.png)

##### justify-content: space-around;

아이템들의 둘레(around)에 균일한 간격을 만들어준다.<br>
![space-around](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FVS1SD%2FbtrTJu82EE5%2FM20zl8QzQyzvlJEBjpERu1%2Fimg.png)

##### justify-content: space-evenly;

아이템들의 사이와 양 끝에 균일한 간격을 만들어준다.<br>
IE와 엣지(Edge)에서는 지원되지 않는다.<br>
![space-evenly](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbS43Fp%2FbtrTMhmQ43H%2FCJRf6aUs3qbGH6kbgGKCwk%2Fimg.png)

#### 수직축 방향 정렬 align-items

##### align-items: stretch;

기본값. 아이템들이 수직축 방향으로 끝까지 늘어난다. <br>

##### align-items: flex-start;

아이템들을 시작점으로 정렬<br>
flex-direction이 row(가로배치)일때는 위, column(세로배치)일때는 왼쪽으로 정렬한다.<br>

##### align-items: flex-end;

아이템들을 끝으로 정렬<br>
flex-direction이 row(가로배치)일때는 아래, column(세로배치)일때는 오른쪽으로 정렬한다.<br>
![flex-end](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNjMhm%2FbtrTKI6DahC%2Fe4cXuPJjl4U5vVn6F8qF41%2Fimg.png)

##### align-items: center;

아이템들을 가운데로 정렬<br>
![center](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzmofD%2FbtrTKJj6gCl%2Fnv1qMfTFuwk4BQQ8YPQRQK%2Fimg.png)

##### align-items: baseline;

아이템들을 텍스트 베이스라인 기준으로 정렬<br>
![baseline](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJ5Vg2%2FbtrTNZeZ4RI%2FJ896wlMeH7OsE6wnYCSwtk%2Fimg.png)

###### Flex를 사용해서 가운데 정렬

<pre>
  <code>
    .flex-container{
      justify-content: center;
      align-items: center;
    }
  </code>
</pre>

## ![가운데정렬](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOtlW8%2FbtrTOdK3K2Q%2FoGimpEPhG0BzpkvdSpbLnk%2Fimg.png)

### 여러 행 정렬 align-content

`flex-wrap: wrap;`이 설정된 상태에서 아이템들의 행이 2줄 이상 되었을때의 수직축 방향을 결정하는 속성<br>

#### align-content: flex-start;

#### align-content: flex-end;

#### align-content: center;

#### align-content: space-between;

#### justify-content: space-around;

#### justify-content: space-evenly;

</details>

<br>

## flex-item에 적용하는 속성

<details>
<summary>접기/펼치기</summary>

### flex-basis

- Flex 아이템의 기본 크기를 설정한다.
- width, heigth 등에 사용하는 각존 단위의 수가 들어갈 수 있다.
- 기본값 auto의 경우 해당 아이템의 width를 사용한다.

### flex-grow

- 아이템이 flex-basis의 값보다 커질 수 있는지 결정하는 속성
- 기본값은 0
- 0보다 큰 값이 세팅될 경우 해당 아이템이 유연한(Flexible) 박스로 변하고 원래의 크기보다 커지며 빈 공간을 메우게 된다.
  - 아이템의 flex-basis를 제외한 여백 부분을 flex-grow에 정의된 숫자의 비율로 나눠가진다.

### flex-shrink

- flex-gorw와 쌍을 이루는 속성
- 아이템이 flex-basis의 값보다 작아질 수 있는지를 결정
- 0보다 큰 값이 세팅이 되면 해당 아이템이 유연한(Flexible) 박스로 변하고 flex-basis보다 작아진다.

### flex

- flex-grow, flex-shrink, flex-basis를 한 번에 쓸 수 있는 축약형 속성
  - 위 세 속성들은 관련성이 높기때문에 축약형을 쓰는것이 편리함

### align-self

- 수직축으로 아이템 정리
- 기본값 auto(기본적으로 align-items 속성을 상속받음)

### order

- 각 아이템들의 시각적 나열 순서를 결정(배치순서)
- 숫자값이 들어가며 작은 숫자일 수록 먼저 배치
  - `시각적`순서일 뿐, HTML 자체의 구조를 바꾸는것은 아니므로 접근성 측면에서의 주의가 필요함
    - 시각장애인들이 사용하는 스크린 리더로 화면을 읽을 경우, order을 이용해 순서를 바꾼것은 의미가 없다.

### z-index

- z축 정렬을 할 수 있다.
- 숫자가 클 수록 위로 올라온다.
  - position의 z-index와 같음

</details>

<br>

## flexBox 지원 범위

- Internet Explorer 10 이상이 지원
- IE10 이상이 완전히 지원하지 않아 IE10과 IE11에서 버그가 발생되기도 한다.
- 모바일 브라우저의 경우 거의 대부분의 iOS용 브라우저와 Android용 브라우저가 지원한다.
  ![image](https://d2.naver.com/content/images/2018/12/helloworld-201811-flex_03.png)

# References.

<https://d2.naver.com/helloworld/8540176><br>
<https://studiomeal.com/archives/197>
