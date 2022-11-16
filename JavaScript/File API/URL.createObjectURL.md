# URL.createObjectURL()

- 특정 file이나 blob🔗 객체를 url로 만들때 사용하는 메서드
- 주어진 객체를 가리키는 url을 DOMString으로 변환한다.
- 해당 url은 window창이 사라지면 함께 사라지기 때문에 다른 window에서 재활용이 불가능하며 수명이 한정되어 있다.
- 객체의 url 사용을 마쳤을 경우, `window.URL.revokeObjectURL(objectURL);`을 사용해 메모리에서 해제하는것이 좋다.

---

# References.

<https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL><br>
<https://ohgyun.com/446><br>
<https://kyounghwan01.github.io/JS/JSbasic/Blob-url/>
