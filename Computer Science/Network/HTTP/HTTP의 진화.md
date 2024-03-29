# HTTP 0.9

- HTTP의 초기 버전으로 기존에는 버전 번호가 없었으나, 이후 버전과 구별하기위해 나중에 0.9로 명명되었다.
- 한 줄 프로토콜
  - 요청은 `GET /"리소스 경로"` 한줄로 구성된다.
  - 응답도 파일 자체로만 구성되어있다.
  - HTTP 헤더가 없어 HTML 파일만 전송할 수 있으며 상태 또는 오류코드가 없다.
    - 문제가 있는 경우 특정 HTML 파일이 생성되고 문제에 대한 설명이 포함된다.

# HTTP 1.0

- 확장성 구축
  버전 정보가 각 요청 내에서 전송된다.
  - `GET /"리소스 경로" HTTP/1.0`
  - 응답 시작시 상태코드 라인이 전송되어 브라우저 자체가 요청의 성공 또는 실패를 인식하고 그에 따라 동작을 조정할 수 있다.
  - 요청과 응답 모두에 HTTP 헤더의 개념이 도입되어 메타 데이터가 전송될 수 있었고 프로토콜이 확장이 가능하다.
  - `Content-Type`헤더 덕분에 일반 HTML 파일 이외의 문서를 전송할 수 있다.

# HTTP 1.1

- 표준화된 프로토콜 : 모호성을 명확히 하고 수많은 개선 사항을 도입
  - 연결을 재사용할 수 있어 시간이 절약된다.
  - `파이프라이닝`이 추가되어 통신의 대기 시간을 줄일 수 있다.
    - 첫번째 요청에 대한 응답이 완전히 전송되기 전에 두번째 요청을 보낼수 있다.
  - 청크 응답이 지원된다.
  - 언어, 인코딩 및 유형을 포함한 콘텐츠 협상이 도입되어, 클라이언트와 서버는 교환할 컨텐츠에 동의할 수 있다.
  - 헤더 덕분에 Host 동일한 IP주소에서 다른 도메인을 호스팅할 수 있어 서버 배열이 허용되었다.

##### 파이프라이닝

![enter image description here](https://t1.daumcdn.net/cfile/tistory/223C9C335479A5FE1A)<br>
3개의 컨텐츠를 요청한다고 할 때, 파이프라이닝 기능이 없는 경우에는 요청1 → 응답1 → 요청2 → 응답2 → 요청3 → 응답3과 같이 진행된다.<br>
즉, 요청1에 대한 응답1을 정상적으로 받아야만 다음 요청2가 진행된다.<br>
어떤 문제가 발생해 응답1이 없는 경우에는 요청2가 진행되지 못하는 문제가 발생하기도 하며 비효율적이다.<br>
<br>
파이프라이닝은 이런 문제를 개선해 동시에 요청1, 요청2, 요청3을 보내고 이에 대한 각각의 응답을 방아 처리한다.<br>
이러한 방법을 통해 응답 속도를 높여 페이지 뷰의 속도를 빠르게 할 수 있다.<br>

# HTTP 1.0과 HTTP 1.1의 차이

1. 커넥션 유지
2. 호스트 헤더
3. 강력한 인증 절차

### 1. 커넥션 유지 Persistent Connection

TCP 세션을 지속적으로 유지할 수 있느냐 없느냐의 차이가 있다.<br>
HTTP 1.0은 요청 컨텐츠마다 TCP세션을 맺어야 하지만(1 GET / 1 Connection), HTTP 1.1은 Persistent 기능을 사용해 한개의 TCP 세션을 통해 여러개의 컨텐츠 요청이 가능하다(N GET / 1 Connection).<br>
이 차이점으로 TCP 세션 처리 부하를 줄일 수 있고, 클라이언트의 응답 속도도 개선할 수 있다.<br>

### 2. 호스트 헤더 Host Header

HTTP 1.0 환경에서는 하나의 IP에 여러 개의 도메인을 운영할 수 없었다. <br>
따라서 도메인 마다 IP를 구분해서 준비해야 했기때문에 도메인 만큼 서버의 개수가 늘어날 수 밖에 없었다.<br>
<br>
HTTP 1.1에서는 Host 헤더의 추가를 통해 가상 호스팅(Virtual Hosting)이 가능해졌다.<br>

#### 가상 호스트 (Virtual Host)

한 대의 컴퓨터로 여러 대의 컴퓨터가 존재하는 것 처럼 동작하도록 한다.<br>
웹 호스팅이 대표적인 가상 호스팅의 예이다. <br>
https://opentutorials.org/module/384/4529<br>
https://mygumi.tistory.com/64<br>

### 3. 강력한 인증 절차 Improved Authentication Procedure

실제 서버에서 클라이언트 인증을 요구하는 www-authentication 헤더는 HTTP1.0에서부터 지원되어 왔으나, 클라이언트와 서버 사이에 프록시가 위치하는 경우 프록시가 사용자의 인증을 요구할 수 있는 방법이 없었다.<br>
HTTP1.1에서는 다음의 두 헤더를 추가해 프록시가 사용자의 인증을 요구할 수 있도록 해 인증절차가 향상되었다.<br>

- proxy-authentication
- proxy-authoriztion

---

# References.

https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP<br>
https://withbundo.blogspot.com/2021/02/http-http-10-http-11.html<br>
https://code-lab1.tistory.com/196<br>
