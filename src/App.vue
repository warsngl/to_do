<script>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
import NavBar from './components/NavBar.vue'
export default{
  components:{
    AddTodo, TodoList, NavBar
  },
  created(){
    const todos=JSON.parse(localStorage.getItem('todos'))
    todos ? this.$store.commit('fillStore',todos) : null
  },
}
</script>

<template lang='pug'>
.flex.flex-col.h-full.items-center
  h1.text-violet-600.text-2xl.font-bold Simple VoodooList
  AddTodo
  TodoList(class='grow')
  NavBar.w-full
</template>

<style>
#app {
  height:100vh;
  padding: 10px;
  font-family: 'Pangolin', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
