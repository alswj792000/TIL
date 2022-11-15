API 서버와 통신해서 데이터를 받아오는 작업을 위해 로컬환경에서 API를 찌르던 중 CORS Error가 발생했다.<br>

> 🚨 Access to fetch at '주소(https://)' from origin 'http://localhost:8080' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

# CORS (Cross-Origin Resource Sharing)

- 교차 출처 리소스 공유
  - 교차출처 : 다른 출처

## 출처 Origin

- 프로토콜, 주소, 포트 번호의 쌍을 말한다.
  - Origin = `프로토콜`://`Host의 IP주소 or URL`:`포트 번호`
- 이때 각 웹에서 사용하는 HTTP(`:80`), HTTPS(`:443`) 프로토콜의 기본 포트 번호가 정해져있기때문에 출처 내의 포트번호는 생략이 가능하다. ( [RFC 2616](https://www.rfc-editor.org/rfc/rfc2616#section-3.2.2) 문서)
  <br>

## SOP (Same-Origin-Policy)

- 같은 출처에서만 리소스를 공유할 수 있다. ( [RFC 6454](https://www.rfc-editor.org/rfc/rfc6454#page-5) )
  - 하지만 웹에서 다른 출처에 있는 리소스를 가져와 사용하는것은 매우 흔한 일이기 때문에 몇가지 예외 조항을 두고 이 조항에 해당되는 리소스 요청은 출처가 다르더라도 허용하기로 했다.
    - `CORS 정책을 지킨 리소스 요청`

즉, 다른 출처의 리소스를 요청한다면 SOP정책 위반이고, SOP의 예외 조항인 CORS 정책을 지키지 않는다면 다른 출처의 리소스를 사용할 수 없다.<br>

### 같은 출처와 다른 출처

---

# References.

<https://evan-moon.github.io/2020/05/21/about-cors/><br>
<https://coding-groot.tistory.com/91>
