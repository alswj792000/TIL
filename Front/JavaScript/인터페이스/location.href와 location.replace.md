# location.href와 location.replace의 차이점

## location.href

- 전체 URL을 포함하는 문자열을 반환하고 href를 업데이트할 수 있도록 한다.
- 새로운 페이지로 이동한다.
- `속성`의 형태
- location history가 기록되어 사용자가 뒤로가기 버튼으로 이전 페이지로 돌아갈 수 있다.

## location.replace

- location의 현재 리소스를 제공된 URL의 리소스로 바꾼다.
  - 기존 페이지를 새로운 페이지로 변경시킨다.
- `메서드`의 형태
- 현재 페이지를 사용한 후에는 location history(session)에 저장되지 않아 사용자는 뒤로가기 버튼을 사용해 이전 페이지로 돌아갈 수 없다.

---

# References.

<https://developer.mozilla.org/en-US/docs/Web/API/Location/href><br>
<https://developer.mozilla.org/en-US/docs/Web/API/Location/replace><br>
<https://blog.naver.com/yiuse78/50100213667>
