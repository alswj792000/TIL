## 요구사항

swiper가 스와이핑될 때마다 swiper 외부 요소의 값도 변경되는 로직을 구현하기위해 swiper의 index값을 스와이퍼 외부에서 사용할수 있도록 해야했다.

## 구현

슬라이드의 인덱스를 변수에 저장해, 그 변수를 활용해 외부 요소의 값을 변경하도록 구현하려고했다.  
  
기존에 스와이핑 될때마다 css를 변경하는 로직을 **`slideChange`**에서 구현했기때문에 마찬가지로 swiper index도 `slideChange`에서 `realIndex`를 사용해 변수로 넘겨주고자했다.  
  
이때 `activeIndex`가 아니라 `realIndex`를 사용한 이유는 loop:true를 사용했기때문에 `activeIndex`가 현재 슬라이드 순서와 달랐기때문이다.

-   `activeIndex` : 현재 활성 슬라이드의 인덱스 번호
    -   ※ loop 모드에서 활성 인덱스 값은 항상 여러 루프 슬라이드에서 이동된다.
-   `realIndex` : loop 모드에서 재배열된 슬라이드를 고려한 현재 활성 슬라이드의 인덱스 번호

#### 예상 결과

-   스와이퍼 영역이 스와이핑 되면 고정영역의 데이터가 변경될것이다.

#### 결과

-   스와이퍼 영역이 스와이핑 되면 고정영역의 데이터는 변경된다.
-   **마지막 슬라이드에서 맨 처음 슬라이드로 스와이프하면 `classList.toggle()`이 동작하지 않아 css가 변경되지 않는 문제 발생**

#### 해결

-   변수에 담는 index의 값을 `realIndex`가 아니라 `activeIndex - 2` 값으로 변경
    -   해결 X : `realIndex`일때와 `activeIndex - 2`일때의 차이 없음
-   slideChange안에서 `if(swiper.realIndex === 0)`일때 `swiper.update();`를 사용해 스와이퍼 업데이트 시도
    -   해결 X
-   **slideChange에서 index의 값을 담는것이 아닌 `realIndexChange`에서 index의 값을 담기**
    -   **해결**

결론적으로 말하자면 slideChange에서 index의 값을 담는것이 아닌 `realIndexChange`에서 index의 값을 담아 사용하는것으로 위 문제를 해결했다.  
  
[🔗issues #490](https://github.com/kidjp85/react-id-swiper/issues/490)에 따르면 duplicate 슬라이드가 loop 모드에서 자체 고유 인덱스를 갖도록 추가되기때문에 slideChange대신 realIndexChange를 사용하는것이 좋다고 한다.

---

### Code Snipet

-   template

```
 <swiper ref="Swiper" class="mySwiper" :options="swiperOptions" @slideChange="slideChange">
	<swiper-slide v-for="(data, index) in dataList" :key="index" >
		<span>{{ data.name }}</span>
	</swiper-slide>
</swiper>
<div class="swiper-outside">
	<span >{{ this.dataList[swiperIndex].score }}</span>
</div>
```

-   script

```
    data() {
        return {
            dataList: [
                {
                    name: '영어',
                    score: '100'
                },
                {
                    name: '수학',
                    score: '80'
                },
            ],
            swiperOptions: {
                loop: true,
            },
            swiperIndex: 0,
        };
    },
    methods: {
        realIndexChange() {
            const swiper = this.$refs.Swiper.$swiper;
            const realIndex = swiper.realIndex;

            this.swiperIndex = realIndex;
        },
        slideChange() {
            // ...
    },
};
    
```

---

# References.
<https://swiperjs.com/swiper-api><br>
<https://github.com/kidjp85/react-id-swiper/issues/490><br>
