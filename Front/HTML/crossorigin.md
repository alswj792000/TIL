# crossorigin

- 요청 모드를 HTTP CORS 요청으로 설정
  <pre>
      <code>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous">
        </script>
      </code>
  </pre>
- 요소에 따라 속성은 CORS 설정 속성이 될 수 있다.

## CORS (Cross-Origin Resource Sharing)

- 웹페이지의 리소스를 자체 도메인 외부의 다른 도메인에서 요청할 수 있도록 하는 메커니즘
- 교차 출처 요청을 허용하는것이 안전한지 여부를 결정하기 위해 브라우저와 서버가 상호 작용하는 방법을 정의한다.
- CORS를 통해 서버의 자산에 액세스할 수 있는 사람 지정 가능

### 교차 출처 요청

- `동일 출처 요청`을 제외한 나머지
- 다른 도메인의 리소스(스타일시트, iframe, 이미지, 글꼴 or 스크립트)에 대한 요청
- 웹 페이지는 동일한 서버에 있는 다른 문서와만 상호작용할 수 있다.
  - 서로 상호 작용하는 문서가 동일한 출처(도메인)을 가져야한다.

### 동일 출처 요청 ( ↔ `교차 출처 요청`)

- 동일한 구성표, 호스트 이름 및 포트가 조합된 웹사이트는 `동일 출처`로 간주된다.

# CORS 설정 속성

- `anonymous` : 요청은 CORS 헤더를 사용하고 자격 증명 플래그는 `same-origin`로 설정된다. <br> 대상이 동일한 출처가 아닌 한 쿠키, 클라이언트 측 SSL 인증서 또는 HTTP 인증을 통한 사용자 자격 증명 교환은 없다.
- `use-credentials` : 요청은 CORS 헤더를 사용하고 자격 증명 플래그는 `include`로 설정된다. <br> 사용자 자격 증명은 항상 포함된다.
- `""` : `crossorigin`속성 이름 또는 `crossorigin=""`은 `anonymous'와 동일하다. 따라서 유효하지 않은 키워드와 빈 문자열은 `anonymous`키워드로 처리된다.

기본적(속성이 지정되지 않은 경우)에는 CORS는 전혀 사용되지않는다.
사용자 에이전트는 리소스에 대한 전체 엑세스 권한을 요청하지 않으며, 교차 출처 요청의 경우 관련 요소 유형에 따라 특정 제한이 적용된다.

|                         |                                                             |
| ----------------------- | ----------------------------------------------------------- |
| `img`, `audio`, `video` | 리소스가 `<>`에 배치되면 요소가 오염된것으로 표시된다.      |
| `script`                | `window.onerror`를 통한 오류 로깅에 대한 액세스가 제한된다. |
| `link`                  | 적절한 `crossorigin`헤더가 없는 요청은 폐기될 수 있다.      |

---

# References.

<https://www.w3schools.com/tags/att_script_crossorigin.asp><br>
<https://web.dev/i18n/ko/same-site-same-origin/><br>
<https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin>
