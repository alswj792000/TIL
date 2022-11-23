# 서버 사이드 렌더링 (SSR)

- 서버에서 사용자에게 보여줄 페이지를 모두 구성하여 사용자에게 페이지를 보여주는 방식
  - JSP/Servlet의 아키텍처에서
- 클라이언트(브라우저)가 서버에 매번 데이터를 요청하여 서버에서 처리하는 방식
- 클라이언트에서 요청이 들어올 때마다 매번 서버에서 새로운 화면(View)를 만들어 제공
  - 서버가 화면(View)를 그리는 주체가 된다.

![enter image description here](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSJFXB%2FbtrhnciO81x%2FpfIVpgnZloBWZJoyCDYuRk%2Fimg.jpg)

## 장점

- 첫 페이지 로딩 속도가 클라이언트 사이드 렌더링에 비해 더 빠르다.
  - 해당 첫 페이지에 해당하는 문서만 브라우저에게 전달해 브라우저가 렌더링하기때문에 초기 로딩 속도가 클라이언트 사이드 렌더링에 비해 더 빠르다.
- 검색엔진최적화(SEO)가 가능

## 단점

- 초기 로딩 이후 페이지 이동 시 속도가 다소 느리다.
  - 페이지 이동 시마다 클라이언트가 서버에게 필요한 데이터를 요청하고 서버가 응답해주는 방식이기때문
  - 사용자가 새로고침을 하게되면 전체 웹 사이트를 다시 서버에서 받아와야 하기때문에 화면이 없어졌다가 나타난다.(`Blinking Issue`)
- 브라우저별 코드는 특정 수명주기 훅 내에서만 사용할 수 있으며, 일부 외부 라이브러리는 서버 렌더링 앱에서 실행할 수 있도록 특별한 처리가 필요할 수 있다.
- 사용자가 사이트를 볼 수 있는 시간(`TTV`)와 실제로 인터랙션이 가능한 시간(`TTI`)의 공백 기간이 꽤 길다.
  - 서버에서 만들어진 HTML파일을 가져와 사용자는 바로 웹사이트를 볼 수있지만, 웹 사이트를 동적으로 제어할 수 있는 자바스크립트 파일은 아직 받아오지 않았기때문에 사용자가 클릭을 해도 아무것도 처리할 수 없다.

### [검색엔진최적화(SEO)]()

---

# References.

<https://www.startupcode.kr/company/blog/archives/12><br>
<https://v3-docs.vuejs-korea.org/guide/scaling-up/ssr.html#why-ssr><br>
<https://d2.naver.com/helloworld/7804182><br>
<https://ctdlog.tistory.com/46>
