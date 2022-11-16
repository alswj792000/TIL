# Creation

- 컴포넌트 초기화 단계이다.
- Creation 단계에서 실행되는 훅(Hook)들이 라이프사이클 중에서 가장 처음으로 실행된다.
- 컴포넌트가 DOM에 추가되기 전으로, 서버 렌더링에서도 지원되는 훅이다.
  - 클라이언트단과 서버단 렌더링에서 모두 처리해야할 일이 있으면 이 단계에서 진행한다.
- 컴포넌트가 DOM에 추가되기 전이기때문에 DOM에 접근하거나 this.$el을 사용할 수 없다.

## beforeCreated

- 모든 훅 중에 가장 먼저 실행되는 훅이다.
- data와 events가 세팅되지 않은 시점이므로 접근할 수 없다.

## created

- data와 events가 활성화되어 접근할 수 있다.
  - computed, methods, watch등이 활성화되어 접근이 가능하다.
- 템플릿과 가상돔은 마운트 및 렌더링되지 않은 상태이다.


**=> data에 직접 접근이 가능하기때문에, 컴포넌트 초기에 외부에서 받아온 값들로 data를 세팅해야 하거나 이벤트 리스너를 선언해야 한다면 이 단계에서 하는것이 가장 적절하다.**

---

# References

<https://aomee0880.tistory.com/185><br>
<https://zincod.tistory.com/238>
