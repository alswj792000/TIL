
 -**Collection**<br>
 -- **List계열**<br>
 : 순위를 유지하고 저장한다. 중복저장이 가능하다 <br>
   ArrayList, Vector, LinkedList...<br>
   
------
List 계열
: 자료들을 순차적으로 나열한 자료구조<br>
	인덱스(순서유지 가능)으로 관리하고, 중복해서 객체 저장을 할 수 있다.<br>
	
ArrayList
: List의 후손으로 초기 저장용량은 10으로 자동 설정된다. <br>
		저장용량을 초과한 객체들이 들어올 경우 용량이 자동으로 증가한다. <br>
		동기화(Syncronized)를 제공하지 않는다.<br>
		
------
1. 제네릭이 설정되지 않아서 어던 타입이든 받을수 있는 상태<br>  



2. 제네릭 타입 지정 (제네릭 : 제한하고 싶은 타입을 설정하여 제한시켜주는역할)<br>  

- add(E e) : boolean :: 리스트 끝에 데이터 추가<br>  
<br>  
- add(int index, E e) : boolean :: index번째 인덱스에 E 추가  → 추가, 삭제, 정렬의 기능처리가 간단하다.<br>  
<br>  
- remove(int index) : E<br>  
<br>  
- remove(Object o) : boolean<br>  
<br>  
초점을 new 연산자에 맞춰봤을때, 사람은 연산자 안의 내용(데이터, 값)으로 비교하지만, 컴퓨터는 주소값으로 비교한다.<br>  
      따라서 컴퓨터는 ["딸기","설탕샵",1000] 을 같은 데이터로 인지하는것이 아니라 주소값이 서로 다르기때문에 다른 객체로 인지하기때문에 삭제되지 않는다.<br>  
   Object를 사용할 때는 컴퓨터가 주소값이 아닌 필드 내용을 기준으로 인지하게 만들어야 같은 객체인지 다른 객체인지 판단 할 수 있기때문에 equals메서드를 사용한다.<br>  