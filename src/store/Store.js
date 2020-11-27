import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch(){
    let arr = [];

    if(localStorage.length > 0){
      for (let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){ 
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        } 
      }
    }

    return arr;
  }
}

export const store = new Vuex.Store({
  state:{
    todoList: storage.fetch()
  },
  mutations:{
    onAddTodo(state, todo){
      let obj = {completed: false, item: todo};
      localStorage.setItem(todo, JSON.stringify(obj))
      state.todoList.push(obj)
    },
    onToggleComplete(state, payload){
      state.todoList[payload.index].completed = !state.todoList[payload.index].completed;
      localStorage.removeItem(payload.todo.item);
      localStorage.setItem(payload.todo.item, JSON.stringify(payload.todo))
    },
    onRemoveItem(state, payload){
      localStorage.removeItem(payload.todo.item);
      state.todoList.splice(payload.index, 1);
    },
    onClearAllItems(state){
      localStorage.clear();
      state.todoList = [];
    }
  }
})