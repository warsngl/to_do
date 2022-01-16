<template lang='pug'>
.flex.justify-between
  p {{undoneTodos}} item left
  .flex
    router-link.mr-2(v-for='filter in filters' :to='filter.url') {{filter.name}}
  button(@click='clearCompleted' :disabled='isDisabled' :class="isDisabled && 'text-gray-400'") Clear completed
</template>

<script>
export default {
  data:()=>({
    filters:[
      {name:'All',url:'/'},
      {name:'Active',url:'/active'},
      {name:'Completed',url:'/completed'},
    ],
  }),
  methods:{
    clearCompleted(){
      this.$store.commit('clearCompleted')
    }
  },
  computed:{
    undoneTodos(){
      return this.$store.getters.undoneCount
    },
    isDisabled(){
      return this.$store.getters.isClearButtonDisabled
    }
  },
}
</script>

<style>
.router-link-exact-active{
  text-decoration: underline;
}
</style>