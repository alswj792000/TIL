# Unable to start the server: Extension backend error - rsp error - community server connector failed to start - typeerror: cannot read properties of undefined (reading 'map')

![image](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbd16cy%2FbtrR2vVgLx8%2FyJIaAryneaEQhkKF5nyg00%2Fimg.png)

VSCode에서 톰켓 사용을 위해 Coummunity Server Connector 익스텐션 설치 후 실행하는 과정에서 발생한 오류이다.

stockoverflow에 따르면 기존에 깔려있는 Java의 버전이 Java8인데 VSCode에서는 Java17 JDK 이상부터 사용할 수 있기때문에 발생한 오류였다.
나의 경우 Vue만 설치되어있고, JDK는 설치되어있지 않아 발생한 오류였다.

---

# References.

<https://stackoverflow.com/questions/72960450/cannot-start-a-tomcat-server-with-the-community-server-connectors-extension-in-v>
