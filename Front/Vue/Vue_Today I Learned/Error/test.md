# [Vue warn]: Property or method test" is not defined on the instance but referenced during render.
> 'test'라는 속성이 선언되지 않았는데 화면에 렌더링 되려고 했습니다.

data나 methods에 변수를 선언해 주지 않고 화면에 렌더링 하려고 해서 발생한 오류였다.
나의 경우에는 methods에 변수를 선언해 주지 않아서 발생했기때문에 변수 선언 후 오류가 뜨지 않았다. 

---
# References.
<https://joshua1988.github.io/web-development/vuejs/common-error-cases/>