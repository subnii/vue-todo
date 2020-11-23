<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todo, i) in todoList" :key="todo.item" class="shadow">
        <i class="checkBtn fa fa-check" :class="{'checkBtnCompleted': todo.completed}" @click="onToggleComplete(todo, i)"></i>
        <span :class="{'textCompleted': todo.completed}">{{todo.item}}</span>
        <span class="removeBtn" @click="onRemoveTodo(todo, i)">
          <i class="fa fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
    
  </div>
</template>

<script>
export default {
  props: ['todoList'],
  methods:{
    onToggleComplete(todo, index){
      this.$emit('toggleItem', todo.item, index)
    },
    onRemoveTodo(todo, index){
      this.$emit('removeItem', todo.item, index)
    }
  }
}
</script>

<style scoped>
ul{
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right:5px;
}
.checkBtnCompleted{
  color: #b3adad;
}
.textCompleted{
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn{
  margin-left: auto;
  color: #de4343;
}
/* 리스트 트렌지션 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>