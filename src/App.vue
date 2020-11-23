<template>
  <div id="app">
    <todo-header />
    <todo-input @addTodoItem="onAddTodo"/>
    <todo-list :todoList="todoList" @toggleItem="onToggleItem" @removeItem="onRemoveItem"/>
    <todo-footer @clearAllItems="onClearAllItems"/>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data(){
    return {
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
    onAddTodo(todoItem){
      let obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj))
      this.todoList.push(obj)
    },
    onToggleItem(todo, index){
      this.todoList[index].completed = !this.todoList[index].completed;
      localStorage.removeItem(todo.item);
      localStorage.setItem(todo.item, JSON.stringify(todo))
    },
    onRemoveItem(todo, index){
      localStorage.removeItem(todo.item);
      this.todoList.splice(index, 1);
    },
    onClearAllItems(){
      localStorage.clear();
      this.todoList = [];
    }
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}

input{
  border-style: groove;
  width: 200px;
}

button{
  border-style: groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>
