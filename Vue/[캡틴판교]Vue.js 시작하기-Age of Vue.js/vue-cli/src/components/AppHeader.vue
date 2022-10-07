<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">send</button> <!-- 버튼을 클릭시 sendEvent 메서드 실행 -->
  </header>
</template>

<script>
export default {
    // 인스턴스 옵션
    props: ['propsdata'],
    methods: {
        sendEvent: function() {
            this.$emit('renew'); // 정의한 event를 위쪽 컴포넌트(App.vue)로 전송 → renew라는 event를 App.vue 컴포넌트로 올린다.
        }
    }
}
</script>

<style>

</style>