# RESTful API

두 컴퓨터 시스템이 인터넷을 통해 정보를 안전하게 교환하기 위해 사용하는 인터페이스<br>

### REST

- Representational State Transfer
- 자원을 이름(자원의 표현)으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든것을 의미한다.
  - 즉, 자원(resource)의 표현(representation)에 의한 상태 전달
    - 자원 : 해당 소프트웨어가 관리하는 모든 것
    - 자원의 표현 : 그 자원을 표현하기 위한 이름
    - 데이터가 요청되는 시점에서 자원의 상태(정보)를 전달하며, JSON 또는 XML을 통해 데이터를 주고 받는것이 일반적이다.
- 월드 와이드 웹(www)과 가은 분산 하이퍼미디어 시스템을 위한 소프트웨어 개발 아키택처의 한 형식이다.
- 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하기 때문에 웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일이다.
- 네트워크 상에서 Client와 Server 사이의 통신 방식 중 하나이다.

REST는 HTTP URL을 통해 자원을 명시하고, HTTP Method (POST, GET, PUT, DELETE)를 통해 해당 자원에 대한 CRUD OPERATION을 적용하는것을 의미한다. <br>

- CRUD OPERATION
  - Create : 생성(POST)
  - Read : 조회(GET)
  - Update : 수정(PUT)
  - Delete : 삭제(DELETE)
  - HEAD: header 정보 조회(HEAD)

## RESTful API의 장점

- 확장성 : REST가 클라이언트-서버 상호 작용을 최적화 하기때문에 효율적으로 크기 조정이 가능하다.
- 유연성 : 완전한 클라이언트-서버 분리를 지원해 각 부분이 독립적으로 발전할 수 있도록 다양한 서버 구성 요소를 단순화하고 분리한다.
- 독립성 : API 설계에 영향을 주지않고 다양한 프로그래밍 언어로 클라이언트 및 서버 애플리케이션을 모두 작성할 수 있으며, 통신에 영향을 주지 않고 기본 기술을 변경할 수 있다.

## RESTful API의 작동 (REST API 호출에 대한 일반 단계)

1. 클라이언트가 서버에 요청을 전송한다. 이때 API 문서에 따라 서버가 이해하는 방식으로 요청 형식을 지정한다.
2. 서버가 클라이언트를 인증하고 해당 요청을 수행할 수 있는 권한이 클라이언트에 있는지 확인한다.
3. 서버가 요청을 수신하고 내부적으로 처리한다.
4. 서버가 클라이언트에 응답을 반환한다. 응답에는 요청이 성공했는지 여부를 클라이언트에 알려주는 정보가 포함되며, 클라이언트가 요청한 모든 정보도 포함된다.

---

# References.

https://aws.amazon.com/ko/what-is/restful-api/<br>
https://velog.io/@somday/RESTful-API-%EC%9D%B4%EB%9E%80<br>
https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html<br>
