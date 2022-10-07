<template>
  <form v-on:submit.prevent="submitForm"> <!-- .prevent : (event modifier) submit에 대해서 기본적인 동작을 막겠다  -->
    <div>
      <!-- lable은 input을 바라보게 된다. → lable을 클릭했을때 input으로 자동으로 포커싱이 감 -->
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username"> <!-- v-model을 이용해서 username을 연결 : input에 어떤 값이 입력될때마다 자동으로 username에 반영 | username의 값을 화면에 그대로 연결해주는 two-way data binding 기술 사용  -->
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <!-- 버튼을 클릭했을때 또는 버튼의 타입이 submit이면 input에서의 enter까지 form에서 입력을 받는다. -->
    <!-- event bubling과 캡쳐링에 대해서 정리!!! 블로그 링크 참고 -->
    <button type="submit" >login</button>
    <!-- 위 코드 : 로그인을 클릭했을때 특정 메소드를 실행하고 싶지만 메소드 실행 전에 새로고침이 됨 
      실질적으로 이 이벤트가 위로 올라가기때문에 form에서 submit을 받아서 form에서 submit이 실행됨
    -->
  </form>
</template>

<script>
import axios from 'axios'; // axios 라이브러리 설치한 후 이용

export default {
  // 각각의 input박스에 입력된 값을 받을수 있도록 간단하게 vue data 생성
  data: function(){ // 값의 참조가 일어나서 데이터가 공유되지 않도록 function을 연결해서 새객체를 return해주는 방법 사용
    return {
      username: '', // null이 들어와도 되지만 기본적으로 String타입이 들어올것이라는것을 고민하고 작성
      password: '',
    }
  },
  methods: {
    // submitForm이라는 메소드 정의
    // submitForm: function(event){
    submitForm: function() {
      //div안에 있는 값들을 이용해서 서버에 보낸다.
      // event.preventDefault(); // 폼의 이동, 새로고침을 막는 방법 -> 새로고침을 하지 않게 됨. 로그인 하고나서 정보를 확인 할 수 있음 → *** 바닐라 js와 같은 일반 javascript, jquery에서 사용하는 방법
      // *** vue에서 사용하는 방법 -> form쪽으로 이동

      console.log(this.username, this.password); // 콘솔에 찍히자마자 새로고침이 됨 -> form의 기본 동작이 새로고침이기때문 
      // 보통 어떤 폼, 정보를 제출하고 해당페이지로 넘어가는 특성이 있기때문에 이것을 막아주기 위해서 메서드에 event인자를 받아 event.pre~를 하게됨
      
      var url = 'https://jsonplaceholder.typicode.com/users'; // rest api 규칙에 의해 이 url로 데이터를 보내고 받을수 있음
      var data = {
        username : this.username,
        password : this.password
      }
      axios.post(url, data) // axios : 브라우저에서 서버로 데이터를 주고 받기 위한 라이브러리 | past : 데이터를 생성하거나 조작할때 사용하는 HTTP 방법
      // then, catch promise 구문에 의해 성공/실패 확인
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>