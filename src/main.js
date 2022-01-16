import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import { createRouter,createWebHistory } from 'vue-router'
import AllTodos from './view/AllTodos.vue'
import store from './store'
const routes=[
  {path:'/',component:AllTodos},
  {path:'/:filter',component:AllTodos},
]
const router=createRouter({
  history:createWebHistory(),
  routes,
})

createApp(App).use(router).use(store).mount('#app')
