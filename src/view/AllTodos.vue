<template lang='pug'>
ul.mx-auto
  li.flex.items-center(v-for='i in filteredTodos' :key='i.id' @click='checkTodo(i.id)')
    input(type='checkbox' class='-mt-1 mr-2' v-model='i.isChecked' @click.stop="checkTodo(i.id)")
    p(:class="i.isChecked && 'line-through'") {{i.name}}
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
  // watch:{
  //   filter(currentFilter){
  //     console.log(currentFilter);
  //   }
  // }
}
</script>

<style>

</style>