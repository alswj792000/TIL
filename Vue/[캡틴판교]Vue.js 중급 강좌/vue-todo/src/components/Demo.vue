<template>
  <div id="root">
    <!-- Vue.js에서 권고하지 않는 방법 : template내부에는 간결하게 작성 -->
    <!-- <p>{{ this.$store.getters.originalPrice }}</p> --> <!-- 100-->
    <!-- <p>{{ this.$store.gettesr.doublePrice }}</p> --> <!-- 200-->
    <!-- <p>{{ this.$store.getters.triplePrice }}</p> --> <!-- 300-->

    <p>{{ originalPrice }}</p> <!-- 100-->
    <p>{{ doublePrice }}</p> <!-- 200-->
    <p>{{ triplePrice }}</p> <!-- 300-->
  </div>
</template>

<script>
// 일일히 $store.getters로 매핑이 번거롭기때문에 한번에 getters를 들고오기위해 mapHelper함수 선언
import { mapGetters } from 'veux';

export default {
    computed: {
        // 일일히 $store.getters로 매핑
        // originalPrice() {
        //     return this.$store.getters.originalPrice;
        // },
        // doublePrice() {
        //     return this.$store.gettesr.doublePrice;
        // },
        // triplePrice() {
        //     return this.$store.getters.triplePrice;
        // },
        ...mapGetters([ // store.js와 Demo.vue에서 사용하는 이름이 동일하기때문에 배열 리터럴 사용
            'originalPrice', 'doublePrice', 'triplePrice'
        ])
    }
}
</script>

<style>

</style>