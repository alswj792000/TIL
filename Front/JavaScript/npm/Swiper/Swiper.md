# Swiper
## Swiper 속성
- loop : 슬라이드 반복 여부. `true/false`
- freeMode : 슬라이드 넘길때 위치 고정 여부. `true/false`
- autoplay: 자동슬라이드. `true/false`
- slidesPerView: 한 번에 보여지는 슬라이드의 수. 기본값 `auto`
- spaceBetween : 슬라이드 사이 여백
- centeredSlides : active한 슬라이드를 중앙에 배치(센터모드). `true/false`
- pagination: 페이징 설정
- navigation: 네비게이션 설정
- breakPoints : 화면 크기에 따라 보여지는 모습이 바뀜(반응형 설정). width값으로 조정.
- roundLengths: 일반 해상도 화면에서 텍스트가 흐려지는 것을 방지하기 위해 슬라이드 너비와 높이 값을 반올림. `true/false`
- on
    - init : swiper가 초기화될 때 실행
    - slideChange : 활성화된 슬라이드가 바뀔때마다 호출
    - activeIndexChange : 활성화된 인덱스가 바뀔때마다 호출

---
# References.
<https://shadesign.tistory.com/entry/swiper-slide-%EC%B4%9D%EC%A0%95%EB%A6%AC%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%A0%81%EC%9A%A9-%EC%98%B5%EC%85%98><br>
<https://blog.naver.com/PostView.naver?blogId=bomnarain&logNo=222401148738&parentCategoryNo=&categoryNo=20&viewDate=&isShowPopularPosts=true&from=search><br>
<https://ay9318.tistory.com/49><br>
<https://velog.io/@hsw7852/swiper-breakpoints-%EB%B0%98%EC%9D%91%ED%98%95%EC%9D%84-%EC%9C%84%ED%95%9C><br>
