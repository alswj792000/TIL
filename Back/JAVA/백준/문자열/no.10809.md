> **알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.<br>- 입력<br>첫째 줄에 단어 S가 주어진다. 단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있다.<br>- 출력<br>각각의 알파벳에 대해서, a가 처음 등장하는 위치, b가 처음 등장하는 위치, ... z가 처음 등장하는 위치를 공백으로 구분해서 출력한다.만약, 어떤 알파벳이 단어에 포함되어 있지 않다면 -1을 출력한다. <br>단어의 첫 번째 글자는 0번째 위치이고, 두 번째 글자는 1번째 위치이다.** <br>

https://www.acmicpc.net/problem/10809<br>

![Q](https://blog.kakaocdn.net/dn/bRRcU6/btrKIyRK0EU/XIc0TDm1jNUSyKunK9PvzK/img.png "Q")<br>

처음 작성한 코드를 정리하자면 다음과 같다.<br>
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);  
        String s = sc.nextLine();
        sc.close();
        
        int[] alphabet = new int[26]; // 알파벳의 개수는 26개
        Arrays.fill(alphabet, -1); // alphabet 배열에 -1 채우기 : 알파벳이 포함되어있지 않은 상태(default)
        
        // s를 한글자씩 잘라서 sList배열에 저장
        char[] sList = new char[s.length()];
        for(int i = 0; i < s.length(); i++) {
            sList[i] = s.charAt(i);
            System.out.println(sList[i]);
        }
         
        // sList와 알파벳을 비교
    }
}

```

1. Scanner을 사용해서 변수 s에 문자열을 입력받음
2. 알파벳의 개수만큼 int 배열을 만들고 배열의 기본값으로 Arrays.fill()을 이용해 기본값으로 -1을 채워둠
3. 입력받은 문자열을 charAt을 이용해 한 글자씩 나누어 char배열에 저장

하지만 char배열에 저장한 값과 알파벳을 비교하는 부분에서 막혀 구글링을 통해 정보를 찾아보기로 했다.<br>
구글링 결과 아스키코드값을 이용하여 구분하는 방법과 indexOf를 사용하여 구분하는 방법 두 가지가 주로 사용되는 것 같았다.<br>

### 아스키코드를 사용해서 풀기
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);  
        String s = sc.nextLine();
        sc.close();
        
        int[] alphabet = new int[26]; // 알파벳의 개수는 26개
        Arrays.fill(alphabet, -1); // alphabet 배열에 -1 채우기 : 알파벳이 포함되어있지 않은 상태(default)

        // sList와 알파벳을 비교 : 아스키코드 사용
        for(int i = 0; i<s.length();i++){
            if(alphabet[s.charAt(i)- 97] == -1)
                alphabet[s.charAt(i)- 97] = i;
        }
        
        // 출력
        for(int i =0;i<alphabet.length;i++) {
            System.out.print(alphabet[i]+" ");
        }
         
        
    }
}

```

아스키코드를 사용해 해당 알파벳을 사용했는지 확인해서 값을 구하는 방식이다.<br>
지문에서 문자열이 알파벳 소문자로만 이루어졌다고 명시되어있기 때문에 -97을 사용해 값을 구했다. (참고 링크 : https://hanxxang.tistory.com/73)<br>
또, 굳이 char배열을 만들 필요 없이 for문안에서 if 문을 사용해 바로 값을 구할 수 있었다.<br>

### indexOf를 사용해서 풀기


