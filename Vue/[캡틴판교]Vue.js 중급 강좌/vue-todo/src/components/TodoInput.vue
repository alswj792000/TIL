<template>
  <div class="inputBox shadow"> 
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" placeholder="Type what you have to do!"> 
    <span class="addContainer" v-on:click="addTodo"> 
      <i class="fa-solid fa-plus addBtn"></i> 
    </span>

    <AlertModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fa-solid fa-xmark" @click="showModal = false"></i>
      </h3>
      <h3 slot="body">
        아무것도 입력하지 않았습니다.
      </h3>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from "./common/AlertModal.vue";

export default {
  data(){
    return{
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo(){
      if (this.newTodoItem !== '') {  
        const text = this.newTodoItem.trim(); 
        this.$store.commit('addOneItem', text); 
        this.clearInput(); 
      } else {
        this.showModal = !this.showModal; 
      }
    },
    clearInput(){
      this.newTodoItem = "";
    }
  },
  components: {
    AlertModal
  }
}
</script>

<style scoped>
/* 코드 스니펫 */
  input:focus {
    outline: none;
  }
  .inputBox { 
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    /* background: linear-gradient(to right, #F2DFA7, #F2C2D4); */
    background: linear-gradient(to right, #F2C2D4, #F2DFA7);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
  .closeModalBtn {
    color: #F26B9C;
  }
</style>