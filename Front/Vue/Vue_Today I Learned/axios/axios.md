# axios

## axios를 사용해 API 서버와 통신

### 1. axios 설치 또는 import

<pre>
    <code>
        npm install axios
    </code>
</pre>

<pre>
    <code>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> // jsDeliver

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script> // unpkg CDN
    </code>

</pre>

### 2. axios 전역 사용 : main.js에 등록하기

<pre>
    <code>
         import axios from 'axios';
        Vue.prototype.$axios = axios;
    </code>
</pre>

위 코드 사용시, 각 컴포넌트에서 마다 import해서 가져올 필요없이 `this.$axios`를 사용해 axios를 사용할 수 있다.

### 3. axios 문법에 맞춰 작성

<pre>
    <code>
        axios({
            url: '',
            method: 'GET/POST',
            data: '',
            responseType: '',
            params: {}
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        });
    </code>
</pre>

- method: 요청 방식(default: GET)
- url : 서버 주소
- data : 요청 방식이 PUT, POST, PATCH에 해당하는 경우 body에 보내는 데이터
- params : url 파라미터(?key=value로 요청하는 url get방식을 객체로 표현한 것)
- responseType : 서버가 응답해주는 데이터의 타입 지정

  - arraybuffer : 바이너리 데이터를 포함하고 있는 JavaScript
  - document : response된 데이터의 MIME 유형에 따라 HTML 또는 XML
  - json : response data를 JSON으로 파싱하여 생성한 JavaScript 객체
  - text : response문자열의 텍스트
  - blob : 바이너리 데이터를 포함하고 있는 객체

  # References.

  <https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9><br>
  <https://imagineu.tistory.com/61><br>
  <https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType>
