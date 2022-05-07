**배열의 오름차순 정렬 : Arrays.sort()**
sort() 메서드는 배열의 요소를 제자리에 정렬하고 정렬된 배열을 반환한다.   

기본 정렬 순서는 오름차순이며 요소를 문자열로 변환한 다음 UTF-16 코드 단위 값의 시퀀스를 비교할 때 작성된다.
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcTmP7y%2FbtrA96Ed17b%2FjCquHZygDD8HoX7311ruR1%2Fimg.png)

숫자(int & double)와 문자(String) 둘 다 오름차순으로 정렬되는 것을 확인할 수 있다. 

------------

**배열의 오름차순 정렬 : Arrays.parallelSort()**
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbUJMWA%2FbtrA6QvboPd%2FVN6pxkMKaW7xXsNNFZ4AxK%2Fimg.png)
Arrays.parallelSort() 메서드 또한 Arrays.sort() 메서드와 같이 배열을 오름차순으로 정렬한다.

------------

**Arrays.sort() 메서드와 Arrays.parallelSort() 메서드의 차이**
두 메소드는 같은 결괏값(오름차순으로 정렬)을 출력한다.
Arrays.parallelSort()은 Java8에서 새롭게 추가된 메서드로 Fork-Join이라는 프레임웍이 내부적으로 적용된 형태의 메서드이다.
    ※ Fork-Join이란?
    Java 7에서 새로 추가된 기능으로, 쉽게 말해서 CPU를 더 쉽고 효율적으로 사용하기 위해서 만들어진 기능이다. ▶Fork : 작업을 여러 개로 나누어서 처리한 후 
    ▶Join : 합친다는 의미다.
    
    이러한 Fork-Join에는 Work Stealing이라는 개념이 포함되어 있다.
    예를 들어 여러 개의 Dequeue에 작업이 나뉘어 어떤 일을 진행할 때, 하나의 Dequeue는 매우 바쁘고, 다른 Dequeue는 매우 한가할 때가 있다. 이때, 한가한 Dequeue가 바쁜 Dequeue의 대기하고 있는 일을 대신 가져가서 처리해주는 것이라고 이해하면 된다.

→ sort()는 항상 단일 쓰레드로 수행되지만 parallelSort() 메소드는 필요에 따라 여러 개의 쓰레드로 나뉘어 작업이 수행되기 때문에 정렬되는 속도가 빠르다.

이 블로그( https://choidev-1.tistory.com/33)를 참고하면
배열의 크기가 크고, 배열의 요소들의 순서가 난수처럼 들쑥날쑥 일 때 / 큰 데이터 처리는 ParallelSort가 빠르고 작은 데이터 처리에는 sort를 이용하는 것이 더 좋다고 하고, 이 블로그(https://1-7171771.tistory.com/118)에서는 멀티 쓰레드를 사용한다는 것은 그만큼 CPU를 더 많이 사용한다는 뜻이기 때문에 데이터의 개수가 많지 않은 배열에서는 굳이 parallelSort()를 사용할 필요가 없다고 한다.
따라서 상황에 따라 두 메서드 중 하나를 선택해서 사용하면 될 것 같다. 

------------


[ 참조 링크 ]

https://ifuwanna.tistory.com/232

https://coding-factory.tistory.com/549





