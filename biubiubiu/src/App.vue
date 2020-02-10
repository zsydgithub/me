<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link to="/mine">Mine</router-link> | -->
      <router-link :to="{name:'mine',params:{id:123,name:'lisi'}}">我的params</router-link>



      <button @click="$router.go(-1)">上一页</button>
      <button @click="$router.go(1)">下一页</button>
    </div>
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
   .fade-enter{
     opacity: 0;
   }
   .fade-enter-active{
     transition: opacity 2s ease;
   }
   .fade-enter-to{
     opacity: 1;
   }
   .fade-leave{
     transform: translateX(0);
   }
   .fade-leave-active{
     transition:transform 1s ease;
   }
   .fade-leave-to{
     transform:translateX(100%)
   }
</style>
