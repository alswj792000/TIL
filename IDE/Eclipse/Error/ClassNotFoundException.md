# java.lang.ClassNotFoundException: org.apache.catalina.startup.VersionLoggerListener

기존 프로젝트를 새롭게 import 하고 실행했을 때 발생한 오류이다.<br>
처음에는 maven 오류인줄 알았으나, 해당 프로젝트에서 maven과 gradle을 사용하지 않았다.<br>
그 이후에는 JDK와 tomcat 문제로 생각해 tomcat 다시 생성하고 java build path 수정했는데 오류가 계속 발생했다.<br>
<br>

[stackoverflow](https://stackoverflow.com/questions/27313848/server-instance-is-not-configured-class-not-found-versionloggerlistener)와 이 [블로그](https://codechacha.com/ko/java-classnotfoundexception/)에 따르면 `java.lang.ClassNotFoundException: org.apache.catalina.startup.VersionLoggerListener`오류는 **프로그램 실행 중 객체를 생성할 때 클래스를 찾지 못하면 발생하는 exception**이다.<br>

발생하는 원인은 다양하지만 대표적으로 **개발하고 있는 IDE의 컴파일 문제로, 추가한 클래스가 JAR에 추가되지 않고 프로그램이 시작되었을 경우**가 있고, **라이브러리 사용 시 호환성 문제로 클래스가 정의되지 않은 낮은 버전의 라이브러리를 사용할 경우**에도 발생한다.<br>
<br>
나의 경우에는 두번째 원인인 `라이브러리 호환성`이 문제였다.<br>
프로젝트를 import 받으면서 기존에 사용하던 라이브러리들도 톰켓에 넣어서 톰켓을 빌드했는데 해당 부분에서 문제가 발생해 라이브러리를 수정했더니 정상적으로 동작했다.

---

# References.

<https://stackoverflow.com/questions/27313848/server-instance-is-not-configured-class-not-found-versionloggerlistener><br>
<https://codechacha.com/ko/java-classnotfoundexception/><br>
