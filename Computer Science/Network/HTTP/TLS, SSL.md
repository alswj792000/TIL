# TLS (Transport Layer Security)

- 인터넷 커뮤니케이션을 위한 개인정보와 데이터 무결성을 제공하는 보안 프로토콜
- 국제 표준 기구인 IETF(Internet Engineering Task Force)에 의해 제안되었다.
- 주로 웹 사이트를 로드하는 웹 브라우저와 같이 웹 응용 프로그램과 서버 간의 커뮤니케이션을 암호화 하는데 사용된다.
- 이메일, 메시지, 보이스 오버 IP와 같은 다른 커뮤니케이션을 암호화하는데에도 사용된다.

## TLS의 특징

- 암호화 : 제 3자로부터 전송되는 데이터를 숨긴다.
- 인증 : 정보를 교환하는 당사자가 요청된 당사자임을 보장한다.
- 무결성 : 데이터가 위조되거나 변조되지 않았는지 확인한다.

# SSL (Secure Socket Layer)

- 암호화 기반 인터넷 보안 프로토콜
- 인터넷 통신의 개인정보 보호, 인증, 데이터 무결성을 보장하기 위해 Netscape가 처음으로 개발했다.
- 현재 사용중인 **TLS 암호화의 전신**
- SSL/TLS를 사용하는 웹 사이트의 URL에는 HTTP대신 HTTPS를 사용한다.

## SSL의 작동

- 개인정보 보호를 제공하기 위해 웹에서 전송되는 데이터를 암호화한다.
- 두 통신 장치 사이에서 `핸드셰이크`라는 인증프로세스를 시작해 두 장치의 ID를 확인한다.
- `데이터 무결성`을 제공하기 위해 데이터에 디지털 서명을 해 데이터가 의도된 수신자에 도착하기 전에 조작되지 않았다는것을 확인한다.

#### 핸드셰이크 HandShake

- 통신의 양 측간에 조건에 합의해가는 정보 교환 과정
- https://evan-moon.github.io/2019/11/17/tcp-handshake/

---

# References.

https://www.cloudflare.com/ko-kr/learning/ssl/transport-layer-security-tls/<br>
https://www.cloudflare.com/ko-kr/learning/ssl/what-is-ssl/<br>
https://coder-in-war.tistory.com/entry/Network-07-%ED%95%B8%EB%93%9C%EC%84%B8%EC%9D%B4%ED%81%ACHandshake<br>
