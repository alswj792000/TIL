<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">
      Clear All
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      clearTodo: 'clearAllItems'
    })
    // clearTodo(){
    //   this.$store.commit('clearAllItems');
    // }
  }
}
</script>

<style scoped>
.clearAllContainer {
    width: 8.3rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn {
    color: #F26B9C;
    /* 추가 */
    display: block;
  }
</style>