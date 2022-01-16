import { createStore } from 'vuex'
import { nanoid } from 'nanoid'

const save=(state)=>localStorage.setItem('todos',JSON.stringify(state))

const store = createStore({
  state () {
    return {
      todos:[],
    }
  },
  mutations: {
    checkTodo (state,id) {
      state.todos.forEach(t=>{
        t.id===id && (t.isChecked=!t.isChecked)
      })
      save(state.todos)
    },
    clearCompleted(state){
      state.todos.map(t=>t.isChecked=false)
      save(state.todos)
    },
    addTodo(state,newTodo){
      state.todos.push({
        name:newTodo,
        isChecked:false,
        id:nanoid()
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
    isClearButtonDisabled(state,getters){
      return state.todos.length==getters.undoneCount ? true:false
    },
  }
})
export default store