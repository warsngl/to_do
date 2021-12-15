import { createStore } from 'vuex'
const save=(state)=>localStorage.setItem('todos',JSON.stringify(state))
export const store = createStore({
  state () {
    return {
      todos:[
        {name:'123',isChecked:false,id:0},
        {name:'234',isChecked:false,id:1},
        {name:'345',isChecked:false,id:2},
      ]
    }
  },
  mutations: {
    checkTodo (state,id) {
      state.todos[id].isChecked=!state.todos[id].isChecked
      save(state.todos)
    },
    clearCompleted(state){
      state.todos.map(t=>t.isChecked=false)
    },
    addTodo(state,newTodo){
      state.todos.push({
        name:newTodo,
        isChecked:false,
        id:state.todos.length
      })
      save(state.todos)
    },
    fillStore(state,todos){
      state.todos=todos
    }
  },
  getters:{
    undoneCount(state){
      return state.todos.filter(t=>t.isChecked==false).length
    },
    isDisabled(state,getters){
      return state.todos.length==getters.undoneCount ? true:false
    },
    todos(state){
      return state.todos
    }
  }
})