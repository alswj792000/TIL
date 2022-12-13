<template>
  <div>
    <TransitionGroup name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fa-solid fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i> 
        <span v-bind:class="{textCompleted: todoItem.completed}"> 
          {{ todoItem.item }} 
        </span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})"> 
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex' // mapMutations 추가 연결

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    })
    // toggleComplete(todoItem, index){ 
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    // }
  },
  computed: {
    ...mapGetters(['storedTodoItems'])  // 배열리터럴 
  }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #F26B9C;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #F2C2D4;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    margin-left: auto;
    /* color: #F29B30; */
    color: #F26B9C;
  }
  /* 리스트 아이템 트랜지션 효과 */
  .list-enter-active, .list-leave-active {
    transition: all 1s; /* 1초정도 트랜지션이 지속 */
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>