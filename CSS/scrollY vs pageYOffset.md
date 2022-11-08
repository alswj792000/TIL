# scrollY

- window 문서가 현재 세로로 스크롤 된 픽셀 수를 반환한다. (세로 스크롤 정보를 가져온다.)
  - 현재 viewport 상단 가장자리의 Y좌표를 반환하며, viewport가 없으면 반환된 값은 0이다.
- 문서가 위/아래로 전혀 스크롤되지 않으면 `scrollY` 0 이다.
- 읽기 전용 속성이다.
- 브라우저 호환성 : Internet Explorer(IE)를 제외하고 모두 지원하며, 일부 모바일 환경에서는 `?(알수없음)`으로 표시된다.

# pageYOffset

- scrollY 속성과 동일하며, 브라우저간 호환성을 위해 scrollY대신 사용할 수 있다.
  - 오래된 브라우저의 경우 scrollY대신 window.pageYOffset만 지원 할 수 있기때문에 pageYOffset 사용을 권장한다.
- 웹 문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환하는 속성이다.

<pre>
    <code>
      window.pageYOffset === window.scrollY; // 항상 true  
    </code>
</pre>

## scrollY vs pageYOffset

두 속성 모두 스크롤 값을 얻을때 사용하는 속성이지만, scrollY는 IE에서 동작하지 않는다.<br>
따라서 브라우저 호환성을 신경쓰지 않는다면 두 속성 중 어느것을 선택해도 상관 없다.<br>
하지만 구형 브라우저까지 신경써야 하는 경우가 많기때문에 pageYOffset을 사용하거나 조건문을 걸어 scrollY와 pageYOffset 둘 다 사용한다.<br>

<pre>
    <code>
        window.scrollY || window.pageYOffset
        window.pageYOffset || document.documentElement.scrollTop
    </code>
</pre>

# IE9 미만을 위한 코드

IE9 미만에서는 두 속성 모두 지원하지 않으므로 또 다른 비표준 속성을 사용해야 한다.

---

# References.

https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY<br>
https://www.w3schools.com/jsref/prop_win_scrolly.asp<br>
https://divlook.tistory.com/9<br>
https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset<br>
https://studyhardgogo.tistory.com/186<br>
