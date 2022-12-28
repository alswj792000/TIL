# Swiper 슬라이드 가운데 정렬
> 🔗 https://sir.kr/qa/479420<br>
>> 처음에는 중앙정렬로 잘 노출되다가 슬라이드를 하나 넘기면 위치가 이상해진다.

![needs](https://sir.kr/data/editor/2211/thumb-3554271915_1668074601.3716_650x265.png)<br>
위 링크와 같은 형태의 슬라이드를 구현하려고 했고, 같은 형태의 오류가 발생했다.<br>
링크에서는 `slideChange`로 슬라이드 이동 시 active 슬라이드의 이미지 크기를 다시 원래대로 돌려주는 방법을 사용해보라는 답변이 달렸지만, 나의 경우 이미 `slideChange`를 통해 acitve 여부에 따라 이미지의 크기를 변경하고 있는 상태였다.<br>

- 스와이퍼 옵션
<pre>
    <code>
        loop: true,
        autoplay: false,
        slidesPerView: 'auto',
        spaceBetween: 24,
        centeredSlides: true
        on { slideChange : function() {
            // active slide일 경우에만 dim처리 제거
        }
    </code>
</pre>

<br>
이 방법을 해결하기 위해 구글링을 통해 몇가지 방법을 시도해봤다.<br>

## swiper-slide의 width값을 지정
🔗 <https://jintrue.tistory.com/entry/javascript-jQuery-Swiper-%EC%9D%91%EC%9A%A9><br>

- 스와이퍼 옵션
<pre>
    <code>
        swiperOption: {
            loop: true,
            autoplay: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            centeredSlides: true
        }
    </code>
</pre>

- css 수정
<pre>
    <code>
        .swiper-slide { width: 48% }
    </code>
</pre>

이 방법은 이전 슬라이드의 경우 원하는 만큼 영역이 고정되었지만 다음 슬라이드가 현재 슬라이드와 겹쳐서 나오는 문제가 있었다.<br>
슬라이드의 영역이 동일한 크기일 경우에는 굳이 `.swiper-slide`에 width를 지정해줄 필요 없이 스와이퍼 옵션만으로도 가운데 정렬이 잘 되었다.<br>

## loop option의 문제
🔗 <https://hjh0827.tistory.com/60><br>
한 화면에서 노출되는 슬라이드의 개수를 1.8개로 제한해서 슬라이드를 가운데 정렬하는 방식이다.<br>

- 스와이프 옵션
<pre>
    <code>
        swiperOption: {
            slidesPerView: 1.8, //화면에 slide 노출 개수
            slidesPerGroup: 1, //swiper 시 개수
            spaceBetween: 10, //간격
            centeredSlides: true, //현재 slide 중앙정렬
            loop: true, // loop 여부
            loopedSlides: 2, //loop 시 duplicate 개수
        }
    </code>
</pre>

위 코드를 참고해서 수정했음에도 불구하고 왼쪽 여백은 넓고 오른쪽 여백은 좁은 문제가 발생해서 `spaceBetween`을 사용해 오른쪽 여백을 기준으로 왼쪽 여백의 크기를 수정했다.<br>

- 스와이프 옵션
<pre>
    <code>
        swiperOptions: {
				loop: true,
				freeMode: false,
				slidesPerView: 1.9,
				slidesPerGroup: 1,
				centeredSlides: true,
				spaceBetween: -9,
                // ....
            }
    </code>
</pre>