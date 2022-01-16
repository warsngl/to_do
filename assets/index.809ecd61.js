import{w as _,v as k,o as d,c,a as x,r as u,b as v,d as i,t as f,F as $,e as g,n as y,f as b,g as w,h as m,i as N,j as A,k as B,l as L,m as S,p as D}from"./vendor.8cf2c633.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};O();function V(e,t,n,a,s,o){return _((d(),c("input",{class:"pl-4","onUpdate:modelValue":t[0]||(t[0]=r=>e.newTodo=r),onKeydown:t[1]||(t[1]=x((...r)=>o.addTodo&&o.addTodo(...r),["enter"])),placeholder:"What needs to be done?"},null,544)),[[k,e.newTodo]])}var p=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n};const j={data:()=>({newTodo:""}),methods:{addTodo(){this.$store.commit("addTodo",this.newTodo),this.newTodo=""}}};var E=p(j,[["render",V]]);const F={};function I(e,t,n,a,s,o){const r=u("router-view");return d(),v(r)}var K=p(F,[["render",I]]);const M={class:"flex justify-between"},U={class:"flex"},J=["disabled"];function P(e,t,n,a,s,o){const r=u("router-link");return d(),c("div",M,[i("p",null,f(o.undoneTodos)+" item left",1),i("div",U,[(d(!0),c($,null,g(e.filters,l=>(d(),v(r,{class:"mr-2",to:l.url},{default:b(()=>[w(f(l.name),1)]),_:2},1032,["to"]))),256))]),i("button",{onClick:t[0]||(t[0]=(...l)=>o.clearCompleted&&o.clearCompleted(...l)),disabled:o.isDisabled,class:y(o.isDisabled&&"text-gray-400")},"Clear completed",10,J)])}const W={data:()=>({filters:[{name:"All",url:"/"},{name:"Active",url:"/active"},{name:"Completed",url:"/completed"}]}),methods:{clearCompleted(){this.$store.commit("clearCompleted")}},computed:{undoneTodos(){return this.$store.getters.undoneCount},isDisabled(){return this.$store.getters.isClearButtonDisabled}}};var q=p(W,[["render",P]]);const z={class:"flex flex-col h-full items-center"},H=i("h1",{class:"text-violet-600 text-2xl font-bold"},"Simple VoodooList",-1);function R(e,t,n,a,s,o){const r=u("AddTodo"),l=u("TodoList"),T=u("NavBar");return d(),c("div",z,[H,m(r),m(l,{class:"grow"}),m(T,{class:"w-full"})])}const G={components:{AddTodo:E,TodoList:K,NavBar:q},created(){const e=JSON.parse(localStorage.getItem("todos"));e&&this.$store.commit("fillStore",e)}};var Q=p(G,[["render",R]]);const X={key:0},Y={key:1,class:"mx-auto"},Z=["id","onChange"],ee=["onUpdate:modelValue"],te=["for"];function oe(e,t,n,a,s,o){return o.filteredTodos.length===0?(d(),c("p",X,"No Todos")):(d(),c("ul",Y,[(d(!0),c($,null,g(o.filteredTodos,r=>(d(),c("li",{class:"flex items-center",key:r.id},[i("input",{class:"opacity-0 absolute cursor-pointer",id:r.id,type:"checkbox",onChange:l=>o.checkTodo(r.id)},null,40,Z),_(i("input",{class:"mr-2",type:"checkbox","onUpdate:modelValue":l=>r.isChecked=l},null,8,ee),[[N,r.isChecked]]),i("label",{for:r.id,class:y(r.isChecked&&"line-through")},f(r.name),11,te)]))),128))]))}const se={data:()=>({}),computed:{todos(){return this.$store.state.todos},filter(){return this.$route.params.filter},filteredTodos(){return this.todos.filter(t=>{switch(this.filter){case"active":return t.isChecked==!1;case"completed":return t.isChecked==!0;default:return!0}})}},methods:{checkTodo(e){this.$store.commit("checkTodo",e)}}};var C=p(se,[["render",oe]]);const h=e=>localStorage.setItem("todos",JSON.stringify(e)),re=A({state(){return{todos:[]}},mutations:{checkTodo(e,t){e.todos.forEach(n=>{n.id===t&&(n.isChecked=!n.isChecked)}),h(e.todos)},clearCompleted(e){e.todos.map(t=>t.isChecked=!1),h(e.todos)},addTodo(e,t){e.todos.push({name:t,isChecked:!1,id:B()}),h(e.todos)},fillStore(e,t){e.todos=t}},getters:{undoneCount(e){return e.todos.filter(t=>t.isChecked==!1).length},isClearButtonDisabled(e,t){return e.todos.length==t.undoneCount}}}),ne=[{path:"/",component:C},{path:"/:filter",component:C}],de=L({history:S(),routes:ne});D(Q).use(de).use(re).mount("#app");
