# Error: getaddrinfo ENOTFOUND {{url}}

보통 테스트 환경에 따라 서버 Ip가 다르기때문에 편리하게 사용하기 위해 url을 환경변수에 세팅해 사용한다.<br>
회사에서 기존에 작성된 collection을 받아 사용하게 되었는데 환경변수를 설정해주지 않아서 에러가 발생했다.<br>

## 발생 원인 1. 환경변수 설정을 하지 않아서

url에는 환경변수가 사용되어있는데 Postman에서 환경변수 설정을 하지 않았을 경우 에러가 발생한다.<br>

### 해결 : 환경 변수 설정

1. 환경 설정 페이지로 이동
2. `Add`버튼을 눌러 환경을 추가
   ![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b076cade-fbf9-4dee-b247-bb3ea80bbb4c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221124T072310Z&X-Amz-Expires=86400&X-Amz-Signature=f81655cb5a44afc5a4bb2ae7d07573d6a30a78e6b2a1a3c54c596cb13e0a6df5&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)
3. 환경의 이름, 사용할 변수 등을 지정
   ![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6e398910-f653-4ea3-891e-9679dca20c04/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221124T072446Z&X-Amz-Expires=86400&X-Amz-Signature=3276cea2b05a9002daacbf6ec63e2d83471f5176f194fa690db5e430b81eba77&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

## 발생 원인 2. 환경변수 설정 중 `Current Value`를 `Intial Value`와 맞춰주지 않아서

환경 변수 설정 중 Current Value와 Inital Value값을 서로 맞춰주지 않으면 오류가 발생한다.<br>

### 🔎 Current Value VS Inital Value

- Inital Value
- Current Value

---

# References.

<https://hihellloitland.tistory.com/94><br>
<https://community.postman.com/t/postman-monitor-error-getaddrinfo-enotfound/3149/4><br>
<https://community.postman.com/t/error-getaddrinfo-enotfound-host/13794><br>
