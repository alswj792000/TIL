# [Swiper] Swiper 가장자리에 그라데이션 넣기
> 🔴 **요구사항**
![enter image description here](https://i.stack.imgur.com/vIbXE.png)<br>
1. 슬라이드의 오른쪽에 그라데이션/페이딩 효과 주기

> 🟢 **해결 방법**
<https://stackoverflow.com/questions/72957731/gradients-on-edges-of-swiper-carousel><br>

`mask`속성에서 `linear-gradient`사용하기
<pre>
    <code>
        .swiper-container {
            mask-image: linear-gradient(to right, white 90%, transparent 97%);
        }
    </code>    
</pre>
---
# References.
<https://stackoverflow.com/questions/72957731/gradients-on-edges-of-swiper-carousel>


