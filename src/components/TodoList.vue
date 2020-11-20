<template>
  <div>
    <ul>
      <li v-for="(todo, i) in todoList" :key="todo" class="shadow">
        <i class="checkBtn fa fa-check" :class="{'checkBtnCompleted': todo.completed}" @click="onToggleComplete(todo)"></i>
        <span :class="{'textCompleted': todo.completed}">{{todo.item}}</span>
        <span class="removeBtn" @click="onRemoveTodo(todo, i)">
          <i class="fa fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      todoList: []
    }
  },
  created(){
    if(localStorage.length > 0){
      for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){ 
          this.todoList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        } 
      }
    }
  },
  methods:{
    onToggleComplete(todo){
      todo.completed = !todo.completed;
      localStorage.removeItem(todo.item);
      localStorage.setItem(todo.item, JSON.stringify(todo))
    },
    onRemoveTodo(todo, index){
      localStorage.removeItem(todo);
      this.todoList.splice(index, 1);
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
</style>