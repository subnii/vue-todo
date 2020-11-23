<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoText" @keyup.enter="onAddTodo()">
    <span class="addContainer" @click="onAddTodo()">
      <i class="fa fa-plus addBtn"></i>
    </span>

    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="fa fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <div slot="body">
        내용이 비어있습니다. 내용을 입력하세요.
      </div>

    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal'

export default {
  data(){
    return {
      newTodoText: "",
      showModal: false
    }
  },
  components:{
    Modal
  },
  methods:{
    onAddTodo(){
      if(this.newTodoText !== ''){
        this.$emit('addTodoItem', this.newTodoText)
        this.onClearInput();
      }else{
        this.showModal = !this.showModal;
      }
    },
    onClearInput(){
      this.newTodoText = "";
    }
  }
}
</script>

<style scoped>
input:focus{
  outline: none;
}
.inputBox{
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input{
  border-style: none;
  font-size: 0.9rem;
}
.addContainer{
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn{
  color: white;
  vertical-align: middle;
}
.closeModalBtn{
  color: #42b983;
}
</style>