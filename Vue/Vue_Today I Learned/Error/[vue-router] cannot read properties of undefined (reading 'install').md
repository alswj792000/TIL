> [vue-router] Router must be called with the new operator.
>
> > Uncaught TypeError: Cannot read properties of undefined (reading 'install')

`vue create 프로젝트명`으로 개발 환경 구현중 발생한 오류이다. <br>
결론적으로 말하면 **vue2를 사용할 경우에는 vue-router3버전을 사용해야 한다.**<br>
<br>
vue2로 프로젝트를 만든 후에 `npm install vue-router`을 사용해 vue-router을 설치했는데, 이 과정에서 자동적으로 vue-router4버전대가 설치되었다.<br>

---

# References.

<https://velog.io/@k_jihye92/Vuevue-router-cannot-read-properties-of-undefined-reading-install><br>
<https://stackoverflow.com/questions/64576005/vue-router-with-vue-3-raises-the-error-uncaught-typeerror-object-is-not-a>
