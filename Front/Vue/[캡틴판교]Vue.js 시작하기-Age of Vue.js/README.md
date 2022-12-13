

# Vue.js 시작하기


> 💡 inflearn에서 장기효(캡틴판교)님의 강의[🔗](https://www.inflearn.com/course/age-of-vuejs/dashboard)를 수강하고 작성한 클론코딩 및 정리입니다.

![인프런 Vue.js 시작하기 강의 썸네일](https://cdn.inflearn.com/public/courses/324088/course_cover/ac203578-d458-44f4-b273-81cb719a89b0/lv1.png)
---

## 목차

- [개발 환경 설정](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/00.%20%EA%B0%9C%EB%B0%9C%20%ED%99%98%EA%B2%BD%20%EC%84%A4%EC%A0%95.md)
- [Vue.js 소개](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/01.%20Vue.js%20%EC%86%8C%EA%B0%9C.md)
	- [MVVM 패턴](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/01-1.MVVM%ED%8C%A8%ED%84%B4.md)
- [인스턴스](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/02.%20%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4.md)
- [컴포넌트](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/03.%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8.md)
	- [컴포넌트 통신 방법 - 기본](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/04.%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%ED%86%B5%EC%8B%A0%20%EB%B0%A9%EB%B2%95%20-%20%EA%B8%B0%EB%B3%B8.md)
	- [컴포넌트 통신 방법 - 응용](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/05.%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%ED%86%B5%EC%8B%A0%20%EB%B0%A9%EB%B2%95%20-%20%EC%9D%91%EC%9A%A9.md)
- [라우터](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/06.%20%EB%9D%BC%EC%9A%B0%ED%84%B0.md)
	- [싱글페이지 애플리케이션(SPA; Single-page application)](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/06-1.%EC%8B%B1%EA%B8%80%ED%8E%98%EC%9D%B4%EC%A7%80%20%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98%28SPA;%20Single-page%20application%29.md)
	- [HTTP 통신 라이브러러 - axios](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/07.%20HTTP%20%ED%86%B5%EC%8B%A0%20%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%9F%AC%20-%20axios.md)
	- [JavaScript의 비동기 처리 패턴](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/07-1.%20JavaScript%EC%9D%98%20%EB%B9%84%EB%8F%99%EA%B8%B0%20%EC%B2%98%EB%A6%AC%20%ED%8C%A8%ED%84%B4.md)
	- [Promise](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/07-2.%20Promise.md)
	- [HTTP 프로토콜](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/07-3.%20HTTP%20%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C.md)
- 템플릿 문법
	- [기본](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/08.%20%ED%85%9C%ED%94%8C%EB%A6%BF%20%EB%AC%B8%EB%B2%95%20-%20%EA%B8%B0%EB%B3%B8.md)
	- [실전](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/09.%20%ED%85%9C%ED%94%8C%EB%A6%BF%20%EB%AC%B8%EB%B2%95%20-%20%EC%8B%A4%EC%A0%84.md)
- [프로젝트 생성 도구 - Vue CLI](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/10.%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%83%9D%EC%84%B1%20%EB%8F%84%EA%B5%AC%20-%20Vue%20CLI.md)
	- [WebPack](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/10-1.%20WebPack.md)
	- [\[VSCode\] 터미널 PowerShell에서 Command Prompt로 변경](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/10-2.%20%5BVSCode%5D%20%ED%84%B0%EB%AF%B8%EB%84%90%20PowerShell%EC%97%90%EC%84%9C%20Command%20Prompt.md)
	- [\[VSCode\] Terminal 종류](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/10-3.%20%5BVSCode%5D%20Terminal%20%EC%A2%85%EB%A5%98.md)
- [싱글 파일 컴포넌트](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/11.%20%EC%8B%B1%EA%B8%80%20%ED%8C%8C%EC%9D%BC%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8.md)
- [사용자 입력 폼 만들기](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/12.%20%EC%B5%9C%EC%A2%85%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20-%20%EC%82%AC%EC%9A%A9%EC%9E%90%20%EC%9E%85%EB%A0%A5%20%ED%8F%BC%20%EB%A7%8C%EB%93%A4%EA%B8%B0.md)
	- [이벤트 버블링, 이벤트 캡쳐, 이벤트](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/12-1.%20%EC%9D%B4%EB%B2%A4%ED%8A%B8%20%EB%B2%84%EB%B8%94%EB%A7%81,%20%EC%9D%B4%EB%B2%A4%ED%8A%B8%20%EC%BA%A1%EC%B3%90,%20%EC%9D%B4%EB%B2%A4%ED%8A%B8.md)
	- [Node.js와 NPM](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/12-2.%20Node%20js%EC%99%80%20NPMmd)
- [마무리](https://github.com/alswj792000/TIL/blob/main/Vue/%5B%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90%5DVue.js%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Age%20of%20Vue.js/StudyNote/13.%20%EB%A7%88%EB%AC%B4%EB%A6%AC.md)



## License & Copyright

**Copyright © 2021 Captain Pangyo**

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs 4.0 Unported License</a>.
