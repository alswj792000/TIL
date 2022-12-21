# eslint와 prettier 충돌로 인한 오류

![error](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/862d29d9-ad5d-4121-8ea5-9d4de20c8e32/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221221T005121Z&X-Amz-Expires=86400&X-Amz-Signature=dba56a796e7cfaea497a316ed0e2be43d1dd1fab24c396c0e0b36beb79a287b2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)<br>

> Delete '␍' <br> Replace '......' with '↹↹'<br> Replace '⏎⏎}' with '};'

- ␍ : `Carriage Return`의 약자로 현재 라인에 커서를 뒀다가 맨 앞으로 옮기는것을 말한다.
- ↹ : tab
- .. : space
- ⏎ : enter

이 오류는 eslint와 prettier가 충돌해서 발생하는 것으로, prettier 2.0 이상부터 endOfLine 기본 옵션이 'auto'에서 'if'로 변경되어 발생하는 에러라고 한다.<br>

## 해결 방법

### 1. eslint.js에 `endOfLine: "auto"` 작성 (사용 불가)

구글링 결과 .esLint.js 또는 .eslint.json에 _다음과 같은 문구_ 를 추가하면 해결 할 수 있다는 글이 대다수 였으나, 나의 경우 이미 상용화된 프로젝트에 새로운 파일을 추가하는것이어서 기본 세팅이 완료된 상태였다.<br>

<pre>
    <code>
        rules: {
            'prettier/prettier' : [
                'error',
                {
                    endOfLine: 'auto'
                }
            ]
        },
    </code>
</pre>

### 2. vscode 하단의 `CRLF`를 `LF`로 변경

![CRLF→LF](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/87e3cfd1-939d-4d03-acd6-16d066479dd2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221221T003616Z&X-Amz-Expires=86400&X-Amz-Signature=f2b6a90f50cb55d923eb9b41372a72e15be8e3155df8309e3d0aeeb5a2f56c68&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)<br>

### 3. vscode 기본 설정을 `LF`로 변경(새로운 파일 생성 시 적용)

![vscode setting1](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/744dc13e-a342-45d5-a30b-a591a36d1f53/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221221T010257Z&X-Amz-Expires=86400&X-Amz-Signature=9189e4109b00b6988c7bb959d70e7bdc29d09de638d8b7bf3a7102d001d514ec&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)<br>

> file > preferences > Settings > eol 검색 > Files:Eol `\n(LF)` 선택

### 4. vscode 의 Format On Save 와 Default Formatter 설정 확인

![vscode setting2_1](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b53fe29a-03c0-4248-9cdd-ae56fd3ff850/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221221T010443Z&X-Amz-Expires=86400&X-Amz-Signature=c85fdbbd1ee01c64f87e74fd9d2e7748202cfbad1fe87327f6923e1323e5b5a0&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)<br>
![vscode setting2_2](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bb8c76b5-d23b-4234-a60b-ede824743371/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221221T010508Z&X-Amz-Expires=86400&X-Amz-Signature=dd3da6617383191d66a39401374f165eaca1a052c8a1bd8e930c62692d88cc70&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)

- Format On Save : `√`
- Default Formatter : `Prettier`

## 결과

사용이 불가능한 해결방법 1을 제외한 모든 방법을 시도한 후 파일과 vscode를 여러번 재시작해봤지만 오류가 해결되지 않아 eslint를 끄고 사용하는것으로 결정했는데, 다음날 컴퓨터를 켜서 시도해보니 오류가 없어졌다(...?!)

**→ 설정을 LF로 변경해보고 재실행으로도 해결이 되지 않을때는 아예 컴퓨터를 다시 시작 해보자....**

# CRLF와 LF의 차이

🔗 <https://velog.io/@jakeseo_me/LF%EC%99%80-CRLF%EC%9D%98-%EC%B0%A8%EC%9D%B4-Feat.-Prettier>

## CRLF

- \r\n : 커서를 맨 앞으로 되돌리기 이후 종이를 한 칸 올리기 (Carriage return + Line Feed)
- 이전 타자기에서의 줄넘김 개념을 그대로 가져온것.
- `windows`에서 줄넘기 값의 기본값으로 사용한다.

## LF

- \n : 종이를 한 칸 올리기 (Line Feed 전용)
- 현대 디지털 기기의 줄넘김을 말한다.
- `linux`에서 많이 쓴다.

## CRLF와 LF가 발생시키는 문제

`Prettier` 공식문서 중 [End of Line](https://prettier.io/docs/en/options.html#end-of-line)에 대한 부분에서 이 오류가 왜 발생하는지를 알 수 있다.
![pretier official](https://velog.velcdn.com/images%2Fjakeseo_me%2Fpost%2Feb6d590c-de98-4094-bc5a-d9fe87d76e2b%2Fimage.png)

컴퓨터 상에서 `LF`와 `CRLF`는 다른 바이트 코드로 인식되기 때문에 개발자가 정확히 어떤 소스코드를 변환시켰는지 기록하는데 잡음이 된다.
따라서 `Prettier 2.0.0`부터는 `LF`로 강제시키는것으로 변경되었다.

# References.

<https://noogoonaa.tistory.com/62><br>
<https://velog.io/@suyeon-hong/eslint%EC%99%80-prettier-%EC%B6%A9%EB%8F%8C%EB%A1%9C-%EC%9D%B8%ED%95%9C-%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95><br>
<br>

<https://bogyum-uncle.tistory.com/155><br>
<https://jw910911.tistory.com/90><br>
<https://m.blog.naver.com/taeil34/221325864981>
