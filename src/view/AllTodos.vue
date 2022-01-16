<template lang='pug'>
p(v-if='filteredTodos.length===0') No Todos
ul.mx-auto(v-else)
  li.flex.items-center(v-for='t in filteredTodos' :key='t.id')
    input.opacity-0.absolute.w-full.cursor-pointer(:id='t.id' type='checkbox' @change="checkTodo(t.id)")
    input.mr-2(type='checkbox' v-model='t.isChecked')
    label(:for='t.id' :class="t.isChecked && 'line-through'") {{t.name}}
</template>

<script>
export default {
  data:()=>({
  }),
  computed:{
    todos(){
      return this.$store.state.todos
    },
    filter(){
      return this.$route.params.filter
    },
    filteredTodos(){
      const filtered=this.todos.filter(todo=>{
        switch(this.filter){
          case('active'): return todo.isChecked==false 
          case('completed'): return todo.isChecked==true
          default: return true 
        }
      })
      return filtered
    }
  },
  methods:{
    checkTodo(id){
      this.$store.commit('checkTodo',id)
    }
  }
}
</script>

<style>

</style>