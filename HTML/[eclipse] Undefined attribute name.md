# Undefined attribute name

![enter image description here](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://k.kakaocdn.net/dn/bASBkC/btrQKhR56rE/l6u4hlAxXZ5zVomuhjtiHK/img.png)<br>
Eclipse에서 HTML5 콘텐츠로 awesome-font의 CDN을 삽입했을때 발생한 경고이다.<br>
기능이 돌아가는데에는 문제가 없지만 경고표시가 계속 떠 있는것이 살짝 눈에 거슬려서 어떤 경고인지 알아보았다.<br>
<br>
해당 오류는 Eclipse에서 HTML5 요소와 속성을 검증하는데 문제가 있기때문에 발생한 경고로, HTML에서 지정하지 않은 속성을 사용하고 있을때 발생한다.<br>
추가 속성을 사용해야 하는 경우라면 어쩔수 없이 이 경고를 무시해줘야한다.<br>

## 경고 무시하는 방법

> Window > Preferences > Web > HTML Files > Validation > Attributes >Undefined attribute name: Ignore

![enter image description here](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://k.kakaocdn.net/dn/uDSF6/btrQN8l8yLQ/S2ZFzrj2uhdVKKqRqdMUc1/img.png)

---

# References.

<https://stackoverflow.com/questions/4193905/warnings-of-valid-html5-attributes-in-eclipse><br>
<https://ohrora-developer.tistory.com/1><br>
<https://fordev.tistory.com/53><br>
<https://procenter.tistory.com/45><br>
