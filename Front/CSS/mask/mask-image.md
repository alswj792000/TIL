# mask-image
- 이미지를 `마스킹`(마스크 적용)

#### 이미지 마스킹(마스크)
- 🔗<https://en.wikipedia.org/wiki/Masking_(art)>
- 필요한 부분만을 칠하기 위해 불필요한 부분을 원하는 형태로 가리는것
    - 이미지의 특정 영역에만 효과가 적용되도록 효과가 적용되지 않을 부분과 구분해 주는 것
- 얼굴을 숨긴다는 의미의 마스크에서 파생
- 포토샵의 클리핑 마스크와 같은 효과

## CODE
<pre>
    <code>
        /* Keyword value */
        mask-image: none;

        /* <mask-source> value */
        mask-image: url(masks.svg#mask1);

        /* <image> values */
        mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
        mask-image: image(url(mask.png), skyblue);

        /* Multiple values */
        mask-image: image(url(mask.png), skyblue), linear-gradient(rgba(0, 0, 0, 1), transparent);

        /* Global values */
        mask-image: inherit;
        mask-image: initial;
        mask-image: revert;
        mask-image: revert-layer;
        mask-image: unset;
    </code>
</pre>

## 사용시 주의 할 점
- 크롬, 사파리에서는 `-webkit`접두어가 붙어야만 동작한다.
    - 붙이지 않아도 자동으로 붙여준다.
    ![enter image description here](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/qLjOM/btrVUA5tXtI/UxI3fEhzDjvLoqwSbOhzm0/img.png)



---
# References.
<https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image><br>
<http://yoonbumtae.com/?p=4279><br>