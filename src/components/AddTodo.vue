<template lang='pug'>
input.pl-4(v-model='newTodo' @keydown.enter="addTodo" placeholder='What needs to be done?')
</template>

<script>
export default {
  data:()=>({
    newTodo:''
  }),
  methods:{
    addTodo(){
      this.$store.commit('addTodo',this.newTodo)
      this.newTodo=''
    }
  }
}
</script>

<style>

</style>