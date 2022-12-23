# console.log() 입력 시 undefined가 결과값으로 뜨는 이유는?
`undefiend`는 **반환할 결과값이 없을때** 나오는 것으로, `console.log()`명령어는 어떤 값이 보이도록 출력하는 역할만 할 뿐 그 자체의 결과값은 없다. <br>

## `undefined`와 `null`의 차이
### undefined
- 반환할 결과값이 없다.
- 반환할 결과값이 없기때문에 자료형 또한 알 수 없다.

### null
- `null`이라는 값이 담긴것
- 자료형은 `object`이다.

`undefined`와 `null`값은 빈 값이라는 공통점이 있기때문에 `==`연산자를 사용하면 true 결과값이 나온다.
하지만 엄연히 다른 값이기 때문에 `===`연산자를 사용했을 경우에는 false 결과값이 나온다.

## 정리
|| 변수 존재 | 값 할당 | 자료형 |
|---|---|---|---|
|`undefined`| O | X | undefined<br>(값이 없으므로 자료형도 없다.) |
|`null`| O | O<br>(null) | object |

---
# References.
<https://fromnowwon.tistory.com/entry/undefined-null>