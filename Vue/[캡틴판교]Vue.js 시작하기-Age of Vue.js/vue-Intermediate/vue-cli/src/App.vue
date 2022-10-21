<template>
  <!-- template 속성에서는 html elements가 최상위 하나만 있어야 한다. →  -->
  <div>
    <!-- {{ str }} -->
    <!-- <app-header v-bind:프롭스 속성 이름 ="상위 컴포넌트의 데이터 이름"></app-header>--> <!-- 프롭스 속성 이름 : 하위속성(AppHeader)에서 정의한 프롭스 이름 | 상위 컴포넌트 : App.vue-->
    
    <!-- AppHeader.vue에서 올린 renew라는 이벤트를 받을 수 있는곳 → app-header컴포넌트를 등록 한 태그 -->
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr"> <!-- v-on:하위컴포넌트에서 올라온 event 이름="실헹할 메서드 이름" -->
    </app-header> <!-- 컴포넌트 태그 정의 -->
  </div>
  <!-- 하단에 div를 또 추가했을 시 error 발생 -->
  <!-- <div></div>  -->
</template>

<script>
  // App.vue에서 AppHeader의 내용을 사용하기 위해 import
  import AppHeader from './components/AppHeader.vue' // 상대 경로이기때문에 ./를 꼭 사용해야 한다. (Aoo.vue파일 기준에서 같은 위치에서 component라는 폴더까지 와있음) + 가급적 import를 쓸때는 .vue까지 붙여줘야 vscode에서 제공하는 파일 바로가기를 깨지지 않고 사용할 수 있음
  // 기존 코드
  // var AppHeader = {
  //   template: '<header><h1>Header</h1></header>'
  // }
  // 하지만 이번에는 객체로 저장한것이 아닌 파일로 저장했기때문에 파일의 내용을 들고올 수 있도록 import from 문법을 써서 컴포넌트에 바로 연결했다.

  export default {
    // 기존에는 new Vue에 data 객체만 연결해도 됐는데 cli를 통해 .vue파일로 오게되면 컴포넌트를 재사용할 확률이 높기때문에 여러개 컴포넌트에서 동일한 값을 공유,찹조할수 없다.
    // new Vue({
    //   data: {
    //     str: 'hi'
    //   }
    // })
    // 따라서 data:{}이 아닌 function()함수를 연결한 다음 return으로 새 객체를 반환해줘야 한다. vue최신버전부터는 이런 부분에 대해 로깅이 엄격해지고있다.
    data: function(){
      return {
        str: 'Header'
      }
    }, 
    components: {
      'app-header': AppHeader
    }, 
    methods: {
      renewStr: function(){
        // data의 str의 값을 바꾸는 메서드 로직을 정의
        this.str = 'hi'; // 같은 컴포넌트이기때문에 this사용
      }
    }
  }
</script>

<style>

</style>