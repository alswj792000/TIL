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

# Grid 용어 정리

![grid-word](https://studiomeal.com/wp-content/uploads/2020/01/03-2.jpg)

- 그리드 컨테이너 Grid Container : `display: grid`를 적용하는 그리드의 전체 영역.
- 그리드 아이템 Grid Item : 그리드 컨테이너의 자식 요소들. 아이템들이 Grid 규칙에 의해 배치된다.
- 그리드 트랙 Grid Track : 그리드의 행(Row) 또는 열(Column)
- 그리드 셀 Grid Cell : 그리드의 한 칸을 가리킴
- 그리드 라인 Grid Line : 그리드 셀을 구분하는 선
- 그리드 번호 Grid Number : 그리드 라인의 각 번호
- 그리드 갭 Grid Gap : 그리드 셀 사이의 간격
- 그리드 영역 Grid Area : 그리드 라인으로 둘러싸인 사각형 영역으로, 그리드 셀의 집합

# Grid-Container에 적용하는 속성

<details>
<summary>접기/펼치기</summary>

## display:grid;

- 아이템들이 block 요소일 경우, 큰 변화 없음
- `inline-grid`는 컨테이너가 주변 요소들과 어떻게 어우러질지 결정하는 값으로 inline-block과 같이 동작한다.

## 그리드 형태 정의

### gird_template_rows :행(row)의 배치를 결정

### grid_template_columns : 열(column)의 배치를 결정

- 컨테이너에 Grid 트랙의 크기들을 지정해주는 속성
- 여러가지 단위를 사용할 수 있으며 섞어서 쓸 수 있다.
  - 고정크기와 가변크기를 섞어 쓸 수 있다.

<pre>
  <code>
    display: grid;
    grid-template-columns: 200px 200px 500px; // column을 200px, 200px, 500px로 만들겠다.
    grid-template-columns: 1fr 1fr 1fr; // 1:1:1 비율인 3개의 column을 만들겠다.
    grid-template-columns: 100px 2fr 1fr; // 첫번째 행은 100px로 고정, 두번째, 세번째 행은 2:1의 비율로 지정
  </code>
</pre>

#### fr

- fraction(일부, 부분)
- 숫자 비율대로 트랙의 크기를 나눈다.

![grid-template-columns](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FL25cd%2FbtrT4R8ITGD%2FuvUbxfuU3QFHMvqnQ7DMx1%2Fimg.png)
![고정+가변](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoLNv1%2FbtrTVTUIHqf%2F5HkM4tpF9zsTddJRQ5s2yK%2Fimg.png)

#### repeat(반복횟수, 반복 값)

- 반복되는 값을 자동으로 처리할 수 있는 함수
  <pre>
    <code>
      grid-template-columns: repeat(5, 1fr);
  	  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr */
  
      repeat(3, 1fr 4fr 2fr); 
    </code>
  </pre>

  ![repeat](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fz4Njv%2FbtrTWM2kGb9%2FgOKli4yfxk5JqqYzB6nIQ1%2Fimg.png)

#### minmax(최솟값, 최댓값)

- 최솟값과 최댓값을 지정할 수 있는 함수
- 최댓값을 `auto`로 지정할 경우 최솟값의 크기를 넘어가면 자동으로 길이가 늘어나도록 해준다.
<pre>
  <code>
    grid-template-rows: repeat(3, minmax(100px, auto));
  </code>
</pre>

![minmax](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb7m0Qx%2FbtrT1FBwk8l%2F1hBXSOrBSWqJBirsbLaex1%2Fimg.png)

#### auto-fill / auto-fit

- column의 개수를 미리 정하지 않고 설정된 너비가 허용하는 한 최대한 셀을 채운다.
- `auto-fill`의 경우 셀의 개수가 너비에 할당된 셀의 개수보다 모자랄 경우 공간이 남는다.
- `auto-fit`의 경우 셀의 개수가 너비에 할당된 셀의 개수보다 모자랄 경우 남는 공간을 채운다.
<pre>
  <code>
    grid-template-columns: repeat(auto-fill, minmax(10%, auto));
    grid-template-columns: repeat(auto-fit, minmax(10%, auto));
  </code>
</pre>

![auto-fill/fit](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKrd74%2FbtrTYB7lB8i%2FyHUZgaNZPKKmQ572b78f91%2Fimg.png)

## 간격 만들기

### row-gap

### column-gap

### gap

- 그리드 셀 사이의 간격을 설정한다.
- 초기에는 앞에 grid를 붙여 grid-gap, grid-row-gap, grid-column-gap 등으로 사용하였으나, 브라우저 호환 범위를 넓히기 위해 grid를 떼고 사용할 수 도 있다.
- IE에서는 gap의 대체 속성이 없기때문에 IE와 구조를 통일하고 싶을 경우에는 처음부터 gap을 사용하지 않고 구조를 설계하는것이 편하다.
  <pre>
    <code>
      row-gap: 10px; /* row의 간격을 10px로 */
  	  column-gap: 20px;  /* column의 간격을 20px로 */
      
      gap: 10px 20px;  /* row-gap: 10px; column-gap: 20px; */
      
      gap: 20px; /* row-gap: 20px; column-gap: 20px; */
    </code>
  </pre>

  ![gap](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdtveNc%2FbtrT4H6sAo3%2FCRhF0fIKYbR1SKthKi7Eb0%2Fimg.png)

  ## 그리드 형태를 자동으로 정의

  ### grid-auto-columns

  ### grid-auto-rows

  - `grid-template-columns/rows`의 _통제를 벗어난_ 위치에 있는 트랙의 크기를 지정하는 속성
    - repeat에서 row의 개수를 미리 알 수 없을 경우 `grid-auto-rows`를 사용해 해결한다.
      여기서 `grid-template-rows`에 미리 세팅해둔 것이 없기 때문에 _통제를 벗어난_ 위치에 있다고 한다.
      <pre>
        <code>
          grid-template-rows: repeat(3, minmax(100px, auto));
          grid-auto-rows: minmax(100px, auto);
        </code>
      </pre>

![grid-auto](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbAexID%2FbtrT4d5Najy%2FEiNeiaw2nY23nvD69TNigk%2Fimg.png)

</details>
<br>

# Grid-Item에 적용하는 속성

<details>
<summary>접기/펼치기</summary>

## 각 셀의 영역 지정 (Grid-Area)

### grid-column-start

- 특정 item을 표시하기 시작할 열을 지정

### grid-column-end

- 특정 item을 표시하기 끝마칠 열을 지정

### grid-column

- `grid-column-start`와 `grid-column-end`를 한번에 쓰는 축약형

### grid-row-start

- 특정 item을 표시하기 시작할 행을 지정

### grid-row-end

- 특정 item을 표시하기 끝마칠 행을 지정

### grid-row

- `grid-row-start`와 `grid-row-end`를 한번에 쓰는 축약형

</details>
<br>

# References.

<https://it-blog.tistory.com/13><br>
<https://heropy.blog/2019/08/17/css-grid/><br>
<https://studiomeal.com/archives/533><br>
<https://saeatechnote.tistory.com/entry/css-grid-%EC%84%B8%EC%83%81%EC%97%90%EC%84%9C-%EA%B0%80%EC%9E%A5-%EC%89%BD%EA%B2%8C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0>
