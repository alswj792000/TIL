# Watch
- 반응형 콜백
    - data 또는 computed 속성의 데이터 값(프로퍼티)이 변경될때 지정한 콜백함수가 실행된다.
- 컴포넌트 외부의 동작이나 비동기 처리에 사용된다.(직접 컴포넌트에 영향을 주지 않는다.)
    - 데이터를 가져오는것 Fetching data
    - DOM 조작하기
    - 로컬 저장소 또는 오디오 재생과 같은 브라우저 API 사용

# Computed
- 변화에 대한 응답으로 계산을 업데이트할때 주로 사용된다. (반응형 getters)
- 선언형 프로그래밍 방식이다.
- 계산된 결과가 캐싱된다.
- **`method`와 다르게 해당 속성이 종속된 대상이 변경될때에만 함수를 실행한다.**
- computed에 새로운 프로퍼티를 추가해야 사용이 가능하다.(data와 혼재해서 사용이 불가능하다.)

#####→ Vue 공식 문서에서는 computed와 watch가 둘다 가능한 경우에는 computed를 쓰라고 명시되어있다.
(- 선언형 프로그래밍이 명령형 프로그래밍보다 코드 반복 및 우수하기때문)

## 사용
1. data에 할당된 값들 사이의 종속관계를 자동으로 세팅 : `computed`
2. 프로퍼티 변경 시점에 action이 필요할 때(api, call, router,,,) : `watch`
3. computed는 종속관계가 복잡할 수록 재계산시점을 알수 없어서 종속관계의 값을 리턴하는것 이외에는 코드 지양한다.
4. computed와 watch 둘 다 가능한 것은 computed이다.
6. data의 실시간/빈번한 update가 필요할 경우 : `watch`
7. 한번 렌더링 되었을때만 update되는 경우 : `computed`
8. 이미 정의된 계산식에 따라 결과값을 반환할 경우 : `computed`
9. 특정한 조건에서 함수를 실행시키기 위한 트리거로 사용할 경우 : `watch`

---
# References.
https://mosei.tistory.com/entry/Vuejs-Watch-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95
https://ui.toast.com/weekly-pick/ko_20190307
https://hyeonyeee.tistory.com/80