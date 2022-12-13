# Object.entries
- entries : 입구, 들어감
    - Object.entries : 객체가 (배열로) 들어간다.
<pre>
    <code>
        Object.entries(obj)
        // 객체 → 배열
    </code>
</pre>
- 객체를 2차원 배열로 만들어 준다.
- 객체의 키와 값을 [key, value]의 배열로 반환한다.
    - 객체가 배열로 바뀜에 따라 key와 value는 순서성을 가지게된다.
![enter image description here](https://velog.velcdn.com/images/loocia1910/post/ddec847f-eabe-46f5-a31a-91c9f9102fe5/1.png)


# Object.formEntries
- entries : 입구, 들어감
    - Object.formEntries : 배열이 객체의 엔트리로 부터 들어간다.
<pre>
    <code>
        Object.formEntries(arr)
        // 배열 → 객체
    </code>
</pre>
- 2차원으로 구성된 배열(key-value 쌍으로 이루어져있음)의 키 값 쌍 목록을 객체로 바꾼다.

---
# References.
https://velog.io/@loocia1910/Object.entries-VS-Object.fromEntries
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
